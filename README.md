# Mineral Specimen Collection

**Unique Perspective 8 · Field cabinet**

British Columbia stone, arranged the way the land arranged it: **by locality first**, species second.

Live Pages URL (enable Pages on `main` / root):
https://morgan4uniqueperspective-ship-it.github.io/mineral-specimen-collection/

## What this is

A public landing page and catalog for field-collected specimens. It is a cabinet that remembers place, then a door to the shop.

- Voice and tokens match the Prospecting Atelier theme.
- Specimens live in `data/` so the HTML does not become a graveyard of hard-coded cards.
- Commerce is one quiet action: *Enter the field collection* → [uniqueperspective8.com/shop](https://uniqueperspective8.com/shop/).

## How to add a specimen

1. Drop a photo in `images/` (or link a hosted image).
2. Add an object to `data/specimens.json`.
3. Set `localityId` to one of the ids in `data/localities.json`.
4. If the stone has no named drainage yet, use `localityId: "unplaced"`. Do not invent a place.

A specimen without place does not get a false provenance. That is the brand rule.

## Localities in version one

- Vernon Volcanics — fire, rhyolite, pyrite
- Similkameen Valley — water, agate, jasper, river quartz
- Unplaced — honest holding ground until the drainage can be named

## Design tokens

Ground `#12100e` · Ink `#f3ead8` · Gold `#c4a15a` · Cormorant + Inter
