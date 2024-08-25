ReachInbox.ai Frontend Development Assignment Reference Document

Introduction
Welcome to the ReachInbox.ai Frontend Development Assignment. This assignment is designed to evaluate your proficiency in frontend development using technologies such as ReactJS, NextJS, Tailwind, Axios, JavaScript, CSS, App Routing, and API Integration. By completing this project, you will demonstrate your ability to create responsive and feature-rich user interfaces while integrating third-party APIs.

Step-by-Step Instructions
Follow these steps to complete the assignment efficiently:

1. Implement the Login Page
- Objective: Create a login page using the design provided in the Figma link.
  - Design File: [Figma Design](https://www.figma.com/file/uECxqvFhEx9dn4ZuO7wqmu/Reachinbox-Assignment?type=design&node-id=0-1&mode=design)

2. Implement Google Login
- Objective: Integrate Google login functionality.
  - Users should be able to log in using their Google accounts.
  - Upon successful login, redirect the user to the OneBox screen.

3. Fetch Data in OneBox using API Integration
- Objective: Display a list of data items in the OneBox screen.
  - API Endpoints:
    - `GET /onebox/list`
    - `GET /onebox/:thread_id`
    - `DELETE /onebox/:thread_id`

4. Implement Keyboard Shortcuts in OneBox
- Objective: Add keyboard shortcuts for enhanced user experience.
  - Shortcuts:
    - Pressing “D” should delete an item.
    - Pressing “R” should open the reply box.

5. Implement Custom Text Editor
- Objective: Create a custom text editor with additional functionality.
  - Add custom buttons like “SAVE” and “Variables” in the editor.

6. Implement Reply Functionality
- Objective: Enable users to reply to items within the OneBox screen.
  - API Endpoint:
    - `POST /reply/:thread_id`
    - Payload: `{from:"email", to:"email", "subject":"", "body":"<html></html>"}`

7. Implement Light and Dark Mode
- Objective: Provide users with both light and dark theme options.

Best Practices
- Clean Code: Write clear, concise, and well-documented code. Use comments where necessary.
- Accessibility: Ensure that your application is accessible to all users, including those with disabilities.
- Performance: Optimize your application for performance. Minimize loading times and ensure smooth interactions.
- Responsiveness: Design your application to be responsive across various devices and screen sizes.
- Usability: Make sure your application is easy to use and navigate.

Submission Guidelines
To submit your assignment, follow these steps:

1. Screen Recording: Create a screen recording video explaining the app you have created and showcasing all the functionalities mentioned in the instructions. Use tools such as Loom for this.
