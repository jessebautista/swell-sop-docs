# Project fields explanations

**Assignee**: This field will initially be empty until the issue is assigned to a member of the team. Usually, this consist of either a PM or engineer, but it can be assigned to other team members.

---

**Projects**: When a new issue is submitted, the bugs project will initially be assigned to the issue as that is the project it was submitted to. Additional projects will be added as it is picked up by product and engineering.

---

**Dependencies**: For connecting other issues which are either blocking the issue from being worked on/completed or blocking other issues from being worked on/completed.

---

**Priority**: For setting the priority level of the issue. If the priority needs to change, please make sure to leave a comment on the issue as to why.

- Critical: Business critical operations failing on the platform, and no workaround. For example: Blocking checkout or service outage.
- Urgent: Business critical operations failing on enterprise customer. Regression bug or negatively affecting performance. Example: Custom product cannot be added to cart.
- High: Serious problem with the likelihood of affecting customers.
- Medium: Has the potential to affect customers.
- Low: Minor problem or easily worked around.

---

**Assessment**: For the verification or denial of a reported issue on the validity of the bug. This will default to ‘Pending’ when the issue is submitted. Only a PM or engineer should be updating this.

- Pending: The reported issue is waiting to be confirmed to be a bug.
- Verified: The reported issue has been reviewed and confirmed as a bug.
- Denied: The reported issue has been reviewed and determined to not be a bug. If denied, then the reported issue is most likely current functionality. Details should be given as to why the issue was denied.

---

**Bug type**: For indicating the type of bug to understand if the issue is new, a regression, an incident, or not a bug. Only a PM or engineer should be setting this. By default, this is not set.

- New: For issues that are newly impacting the functionality of a feature.
- Regression: For issues that are impacting the functionality of a feature due to a recent fix/deployment.
- Incident: (TBD)
- Not a bug: For issues that were determined to not be a bug.

---

**Enterprise client**: For indicating if a submitted issue is connected to an enterprise account. Multiple enterprise accounts are able to be connected to one issue if needed. If an enterprise account is missing from the list, please notify a support manager to add it.

---

**User account**: For a link to the reported user’s account. This can either be a link to the accounts admin or a link to the account from the Swell super admin.

---

**From**: For indicating where the report was received. Multiple options can be selected if the issue was reported from different methods.

- Internal: For issues found internally by a Swell team member.
- Direct request: For issues received directly from a user during a meeting. These tend to come from account management during their meetings with enterprise accounts.
- Forums: For issues reported within the Swell community forums.
- Chat/email: For issues received through chat (Intercom) or email to support.
- Github: For issues reported on Github.
- Sales: For issues received from users during a sales call.

---

**Department**: For indicating what area of the platform the issue is related to. If unsure as to what area an issue is related to, please ask. Multiple options can be selected if connected to multiple areas. 

---

**Product stage**: For indicating the current status of the issue as per product's current step in the process. Only product or engineering should be setting this. Though there are more than two options for this field, the main two support needs to keep track of are as follows.

- Development: The issue has been picked up and is currently being worked on.
- Release: The fix for the issue has been deployed.

---

**Status**: For indicating the current status of the issue. This is to only be updated by product or engineering.

- Ready: For issues that are ready to be picked up and worked on.
- In progress: For issues that are actively being worked on.
- Blocked: For issues that are blocked by the need for additional information or other issues.
- Review: For issues that are undergoing code review.
- QA: For issues that are undergoing QA.
- Ready to deploy: For issues that are ready for deployment.
- Done/Deployed: For issues that have been completed and deployed.
- On hold: For issues that are on hold. Comments should indicate the reason why.
- Archived: For issues that were determined to not be bugs or unable to be replicated.

---

**Resolution sate**: For indicating the resolution of the issue. Only product or engineering should be setting this.

- Duplicate: For issues that were determined to be a duplicate of an already existing issue.
- Cannot replicate: For issues that were reviewed and could not be replicated.
- Will not fix: For issues that were determined to not be fixed.
- Works as intended: For issues that were determined to be working as they were designed.
- Fixed and deployed: For issues that have had a fixed applied and deployed.

---

**User updated**: For indicating if a user has been notified of any updates presented or when a fix is deployed. This should only be updated by support.

- Yes: For when a user has been notified of any updates or a fix being deployed. Additionally, a comment needs to be logged on the issue indicating that the user was notified.
- Internal: For when an issue was submitted from our internal team and is not connected to a user.

---

**Gitlab URL**: For adding a link to any connected Gitlab merge request. This will only be updated by product or engineering.

---

**Created by**: For indicating which team member submitted the issue to Asana.

---

**Description**: Any details regarding the issue will be added here. For example, an explanation of the issue, steps to reproduce, expected and actual results, link to the source of the report, connected issues, etc.

---

**Activity log/comment section**: This area will show any activity made within the issue, attachments, and comments from team members discussing the issue.