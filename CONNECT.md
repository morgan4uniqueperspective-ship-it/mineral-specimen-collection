# Connecting the cabinet to uniqueperspective8.com

Two doors. One brand. Do not smash them into one host until the lock works.

## What is live right now

| Surface | Where it lives | Status 2026-08-28 |
|---|---|---|
| Apex `uniqueperspective8.com` | WordPress / WooCommerce (historical shop + dropship mix) | **Certificate date invalid** / 503. Browsers refuse the door. |
| Static folio | `1Unique8/Uniqueperspective8.com` | Brand copy and luxury images. Not what the apex is serving while SSL is dead. |
| Atelier tokens | `morgan4uniqueperspective-ship-it/unique-perspective-atelier-theme` | Theme source. |
| Field cabinet | this repo | Ledger-backed specimens. GitHub Pages candidate. |

The shop door on this cabinet still points at `https://uniqueperspective8.com/shop/`.
Until the certificate is renewed, that link is a warning screen, not a till.

## The connection that does not fight WooCommerce

Keep the apex on the WordPress host.
Give the cabinet its own name:

```
cabinet.uniqueperspective8.com
```

This repo contains a `CNAME` file with that hostname.

### On GitHub (this repo)

1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / `/` (root)
4. Custom domain: `cabinet.uniqueperspective8.com`
5. Wait for the DNS check, then enable Enforce HTTPS

Fallback URL while DNS is pending:
https://morgan4uniqueperspective-ship-it.github.io/mineral-specimen-collection/

### At your domain registrar (only you can click this)

Add a DNS record:

```
Type   CNAME
Host   cabinet
Value  morgan4uniqueperspective-ship-it.github.io
TTL    3600
```

Do **not** point the naked `uniqueperspective8.com` A records at GitHub until you have decided to retire WordPress. That would orphan the shop, the cart, and whatever is still paying for hosting.

### On the WordPress site (after SSL is renewed)

Add one quiet menu item:

```
Field cabinet  →  https://cabinet.uniqueperspective8.com/
```

And, when a SIM stone is actually listed, point that product's "view in cabinet" link at:

```
https://cabinet.uniqueperspective8.com/#UP8-SIM-001
```

## First repair on the apex — before any more theme work

`NET:ERR_CERT_DATE_INVALID` means the TLS certificate expired.
Renew it where the domain is hosted (cPanel / WordPress.com / SiteGround / Cloudflare).
Until that date is valid, no theme, no cabinet, and no shop can be "connected" in a way a visitor will trust.

## Brand rule while connecting

- Cabinet names only verified localities.
- Shop sells. Cabinet remembers place.
- Dropship desk organizers do not sit on the same shelf as Similkameen jasper.
