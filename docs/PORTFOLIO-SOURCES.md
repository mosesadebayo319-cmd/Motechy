# Portfolio and case-study sources

Reviewed 11 October 2026. The owner requested images from the brands’ social
accounts and confirmed that Moses is the current social media manager for Heroes
Help, was previously the social media manager for MecuryX, and runs MoTechy.
No employment dates, exclusive design authorship, agency contract or performance
results are inferred from those statements.

## Social artwork

| Local image name       | Original post                                                                                                           | Context                                                                                                                                                                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `heroes-help`          | https://www.linkedin.com/posts/heroeshelp_ticket4troops-heroeshelp-armedforceswelfare-activity-7487784855229874178-9WAL | Ticket4Troops campaign artwork from Heroes Help’s public official LinkedIn page; the portfolio also links to the supplied https://www.facebook.com/Heroeshelp/ account.                                                               |
| `mecuryx`              | https://www.instagram.com/p/DQq4uVPCOXY/                                                                                | MecuryX / Learn2Earn Abuja campus announcement. The owner supplied the Heroes Help link twice; https://mecuryx.com independently links to https://www.instagram.com/mecuryx.africa/ and the company’s Facebook and LinkedIn accounts. |
| `motechy-profile`      | https://www.instagram.com/p/DdI2j1fDQFB/                                                                                | MoTechy’s profile-audit carousel cover, retrieved from the supplied account’s public Instagram profile embed.                                                                                                                         |
| `motechy-independence` | https://www.instagram.com/p/Dd8W6BGltqd/                                                                                | MoTechy’s Nigeria at 66 Independence Day post, retrieved from the same public embed.                                                                                                                                                  |

Facebook’s public page returned account metadata but did not expose campaign
images to this session. Heroes Help’s official website links to its LinkedIn
account, where the selected campaign artwork was publicly available. MecuryX and
MoTechy artwork came from public Instagram embeds. No login, account session or
restricted endpoint was used.

Images are resized without cropping, encoded as WebP at 400 and 800 pixels wide,
and stored under `assets/images/portfolio/`. The build publishes hashed local
files; social CDN URLs and their expiring query strings are not embedded in the
site. HTML declares each original aspect ratio. CSS uses width: 100% and
height: auto, with no art-frame padding or maximum image height.

These are examples from the named accounts. Brand artwork belongs to its
respective rights holders; showing a social media role does not claim sole
authorship of every design or photograph in a campaign.

## ImpactDesk case study

Route: `/work/impactdesk`. Public preview: https://impactdesk.vercel.app.

Reviewed the owner’s connected ImpactDesk repository and public pages. Feature
descriptions are supported by `activities/models.py`, `organizations/workspace.py`,
`reports/models.py`, `reports/snapshots.py` and `PRODUCT_ROADMAP_RELEASE.md`:
activity approvals and event history, previewed draft imports, final-report
snapshots and revisions, and PDF/DOCX/CSV exports. Architecture is supported by
`requirements.txt`, `PUBLIC_SITE_DEPLOYMENT.md` and `SUPABASE_STORAGE.md`:
Django, PostgreSQL, a static Vercel public site, a Render workspace, and private
object storage accessed through the application.

Only a prose summary is published. No private source, credentials or internal
records are included. The public pages were inspected; signed-in workflows and
provider configuration were not independently exercised in this website update.
The product is described as a pilot without adoption or time-saving claims.

## ZeroToCode case study

Route: `/work/zerotocode`. Public preview: https://zerotocode-teal.vercel.app.
Repository: https://github.com/mosesadebayo319-cmd/zerotocode-academy.

`index.html`, `app.js`, the separate course files and README establish the static
HTML/JavaScript implementation, browser-local progress and quiz scores, the 70%
completion threshold, on-demand Pyodide runtime and sandboxed web exercises.
Go and Rust use guided local practice; they are not described as browser runners.
No cloud synchronisation, learner adoption or educational outcomes are claimed.

## Software screenshots

The case-study covers reuse the public screenshots documented in
`SOFTWARE-PROJECTS.md`. New images in `assets/images/case-studies/` are real
1280 × 900 browser captures, resized to 480, 800 and 1280 pixels wide:

- `impactdesk-guide`: public `/how-it-works/` page.
- `zerotocode-lesson`: public JavaScript course, first lesson, empty local progress.

No account was created, private workspace opened or invented interface used.
Captions distinguish public pages and illustrative data from customer results.
