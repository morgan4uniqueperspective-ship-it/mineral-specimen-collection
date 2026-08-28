async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error("Could not read " + path);
  return res.json();
}

function card(specimen) {
  const photo = specimen.image
    ? `<img src="${specimen.image}" alt="${specimen.title}" onerror="this.replaceWith(document.createTextNode('${specimen.id}'))">`
    : specimen.id;
  return `
    <article class="card" id="${specimen.id}">
      <div class="card-photo">${photo}</div>
      <div class="card-body">
        <p class="meta">${specimen.id} · ${specimen.species}</p>
        <h4>${specimen.title}</h4>
        <p>${specimen.note}</p>
        <p class="meta" style="margin-top:0.75rem">${specimen.dimensions || ""} · ${specimen.status || ""}</p>
      </div>
    </article>`;
}

function localityBlock(locality, specimens) {
  const cards = specimens.length
    ? `<div class="grid">${specimens.map(card).join("")}</div>`
    : `<p class="empty">No specimens filed here yet.</p>`;
  return `
    <section class="locality" id="${locality.id}">
      <div class="locality-head">
        <div>
          <p class="kicker">${locality.kicker}</p>
          <h3>${locality.name}</h3>
          <p>${locality.lede}</p>
        </div>
        <div class="element">${locality.element}</div>
      </div>
      ${cards}
    </section>`;
}

async function render() {
  const nav = document.getElementById("locality-nav");
  const root = document.getElementById("cabinet");
  try {
    const locData = await loadJSON("data/localities.json");
    const specData = await loadJSON("data/specimens.json");
    const localities = locData.localities;
    const specimens = specData.specimens;
    nav.innerHTML = localities
      .filter((l) => l.id !== "unplaced")
      .map((l) => `<a href="#${l.id}">${l.name}</a>`)
      .join("");
    root.innerHTML = localities
      .map((loc) =>
        localityBlock(
          loc,
          specimens.filter((s) => s.localityId === loc.id)
        )
      )
      .join("");
  } catch (err) {
    root.innerHTML = `<p class="empty">The cabinet could not be read. Serve this folder over GitHub Pages so the ledger files can load.</p>`;
    console.error(err);
  }
}

render();
