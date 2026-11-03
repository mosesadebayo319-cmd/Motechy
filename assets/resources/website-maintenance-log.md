# Website maintenance checklist and log

MoTechy · 3 November 2026

Companion guide: https://motechy.vercel.app/blog/business-website-maintenance-checklist

Copy this Markdown/plain-text template into your notes or spreadsheet. It is an
editable checklist, not an automated monitoring tool or security certification.
Store passwords, recovery codes and personal customer data elsewhere. Adapt the
frequency and acceptance checks to the actual website and business risk.

## 1. Ownership and inventory

- Website address:
- Business owner / approver:
- Technical owner / support contact:
- Reporting period and review date:
- Support hours / escalation route:
- Maximum acceptable interruption:
- Maximum acceptable loss of new data:

Record a responsible person, renewal date, billing currency and evidence link for
each applicable item. Do not copy credentials into this document.

| Item                                      | Provider / system | Responsible person | Renewal or review date | Evidence / notes |
| ----------------------------------------- | ----------------- | ------------------ | ---------------------- | ---------------- |
| Domain registration                       |                   |                    |                        |                  |
| Hosting and HTTPS certificate             |                   |                    |                        |                  |
| Content system / source repository        |                   |                    |                        |                  |
| Database and uploaded media               |                   |                    |                        |                  |
| Enquiry / email delivery service          |                   |                    |                        |                  |
| Booking / payment integration             |                   |                    |                        |                  |
| Plugins, licences and other subscriptions |                   |                    |                        |                  |

## 2. Schedule and acceptance checks

Suggested starting routine, not a universal service standard:

- Weekly: check the main customer route, current contact details and alerts.
- Monthly: reconcile all checks, updates, access, content and upcoming bills.
- After changes: retest affected pages and the important customer route.
- At an agreed interval: demonstrate an isolated backup restore.
- On relevant alerts: assess promptly rather than waiting for a calendar date.

Backup creation and automated monitoring may need to run much more frequently.

- [ ] Service/product page opens on phone and desktop; current details visible.
- [ ] Navigation, phone and WhatsApp destinations are correct; no message sent.
- [ ] Actual downloaded file opens and contains approved, current information.
- [ ] Form labels, service selection, validation and error states checked.
- [ ] Acceptance/rejection paths tested in staging with a test inbox or mock.
- [ ] Any production-delivery test has prior agreement from the recipient.
- [ ] Latest successful backup timestamp, contents and storage location verified.
- [ ] Restore evidence identifies the copy used, isolated destination and results.
- [ ] Restored copies cannot send customer messages or take live payments.
- [ ] Software updates and relevant advisories reviewed by the technical owner.
- [ ] Planned release has preview results, recovery plan and live acceptance checks.
- [ ] Administrator permissions, recovery access and available MFA reviewed.
- [ ] Domain, hosting and separate service renewals have an owner and payment plan.
- [ ] HTTPS warning/renewal monitoring responsibility confirmed.
- [ ] Important pages, offers, delivery areas and contact details reviewed.
- [ ] Keyboard navigation, larger text and mobile reading spot-checked.
- [ ] Important search/indexing changes reviewed where authorised data is available.
- [ ] Open items retain an owner, impact and due date.

Use “not tested” when a check was not performed. A page opening, a success banner
or a backup completion notice does not by itself verify delivery or recovery.

## 3. Maintenance record

Use one row per task. Repeat or expand the table as needed.

| Date | URL / system | Check or proposed change | Owner | Expected result | Actual evidence | Status | Next action / due date |
| ---- | ------------ | ------------------------ | ----- | --------------- | --------------- | ------ | ---------------------- |
|      |              |                          |       |                 |                 |        |                        |

Suggested statuses: passed, failed, not tested, blocked, not applicable (with reason).

For a release, also record:

- Source version / release ID:
- Affected customer journey:
- Backup or recovery reference:
- Preview checks and results:
- Approval / authorised release owner:
- Live checks and results:
- Remaining gaps and next owner:

For a restoration test, also record:

- Backup timestamp and components included:
- Isolated restore date / environment:
- Data and workflow checks performed:
- Outbound email, payments and scheduled jobs safely isolated:
- Missing items or loss window:
- Time taken and follow-up action:

## 4. Example entry — illustrative only

Hypothetical Ibadan furniture workshop, not a MoTechy client or measured finding:

- Check: product catalogue download.
- Finding: live PDF still shows a discontinued finish.
- Owner: business owner approves options; developer publishes the file.
- Pass condition: the file downloaded from the live product page contains the
  approved finishes and current ordering instructions.
- Evidence: approved file version, live page URL, downloaded-file check and date.
- Status: keep open until the actual download has been checked.
- Due date: agree according to the effect on current orders.

## 5. Monthly handover

- Completed checks and evidence:
- Changes released:
- Failures / uncertainties still open:
- Urgent escalation required:
- Next planned work, owner and due date:
- Costs requiring approval (actual quotes only):

Separate response time from resolution time in the support agreement. Specify
whether restoration, content edits and third-party charges are included. Do not
change domains, email routing or hosting as an unplanned maintenance task.

## Further guidance

- WordPress backups: https://developer.wordpress.org/advanced-administration/security/backup/
- WordPress updates: https://wordpress.org/documentation/article/updating-wordpress/
- Domain renewals: https://www.icann.org/resources/pages/renew-domain-name-2018-12-07-en
- Accessibility spot checks and their limits: https://www.w3.org/WAI/test-evaluate/preliminary/

Sources accessed 3 November 2026. See the companion article for further primary
sources. This worksheet does not establish complete accessibility or security
conformance and does not guarantee uptime or search rankings.
