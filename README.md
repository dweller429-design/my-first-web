# Chama Stanley Mutati — Student Portfolio

A responsive personal portfolio for ICT251 Web Technologies. It introduces my Computer Science studies, interests, learning plan, skills, personal photos and recordings.

## JavaScript features

1. **Contact form validation and preview:** checks the name, email and message, then displays a local preview without sending or reloading the page.
2. **Expandable project details:** each skill card has a button to show or hide more information.
3. **Photo viewer:** Previous and Next buttons change the displayed photo and caption and stop at the first and last photos.
4. **Project search:** filters the three skill examples, reports when there are no matches, and includes a Show all reset.

## Test locally

Open `index.html` with VS Code Live Server. Try the project filter with terms such as `HTML` and `responsive`, expand and collapse each project, and browse the photo viewer in both directions. Submit the contact form with empty fields, whitespace-only name/message, an invalid email, and valid details. The valid preview confirms validation only; the form does not send data.

Check the layout at phone and desktop widths, and confirm that the photos, video and audio load and play. Use the keyboard to navigate links and controls and check the visible focus outline.

## Sources

- Photos, video and audio: original Activity 2 personal media.
- Typography: [DM Sans](https://fonts.google.com/specimen/DM+Sans) and [Manrope](https://fonts.google.com/specimen/Manrope), served by Google Fonts.

## Deploy on Render

Create a Render **Static Site** connected to this repository and deploy the branch containing `index.html` at the repository root:

- Root Directory: leave blank
- Build Command: `echo "No build required"`
- Publish Directory: `.`
- Auto Deploy: enabled
