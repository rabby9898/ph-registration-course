# 3 Project Features

This project is a Course Selection and Credit Tracking application that allows users to browse and select courses while keeping track of their credit hours. Below are some key features of the project:

1. **Course Selection and Credit Tracking:**

   - Users can browse and select courses from a list.
   - The application tracks the selected courses and their corresponding credit hours, ensuring that users do not exceed a specified credit limit (e.g., 20 credit hours).
   - Real-time updates are displayed to users, showing their remaining credit hours as they add or remove courses.

2. **Interactive Toast Notifications:**

   - Instead of traditional alert messages, the application uses interactive toast notifications.
   - Users receive real-time feedback in the form of toasts when they perform actions such as selecting a course they've already chosen or attempting to exceed the credit limit.
   - Toasts are displayed with a user-friendly design and automatically disappear after a short duration, enhancing the overall user experience.

3. **Responsive User Interface:**

   - The user interface is designed to be responsive, adapting to different screen sizes and devices.
   - On larger screens, courses are presented in a grid layout, making it easy for users to explore and select courses.
   - On smaller screens, the layout adjusts to ensure a seamless user experience, making it accessible on both desktop and mobile devices.

## State Management

In this project, state management plays a crucial role in tracking and displaying course selection, credit hours, and other relevant information. Here's an overview of how I managed all the states:

1. **Courses State (`courses`):**

   - The `courses` state is initialized using the `useState` hook and stores the list of available courses.
   - It is populated by fetching data from an external source using the `fetch` API and updating the state with the fetched data in the `useEffect` hook.

2. **Cart State (`cart`):**

   - The `cart` state keeps track of the selected courses by storing their titles in an array.
   - When a user selects a course, its title is added to the `cart` state using the `setCart` function.

3. **Credit State (`credit`):**

   - The `credit` state represents the total credit hours selected by the user.
   - When a user selects or deselects a course, the `credit` state is updated to reflect the new total.

4. **Remaining State (`remaining`):**

   - The `remaining` state calculates and displays the remaining credit hours available for selection.
   - It is updated in real-time as the user adds or removes courses, ensuring that the limit of 20 credit hours is not exceeded.

5. **Total State (`total`):**

   - The `total` state keeps track of the total price of the selected courses.
   - When a user selects a course, its price is added to the `total` state, providing a summary of the selected courses' cost.

The combination of these states and their management ensures a dynamic and responsive user experience when selecting courses and tracking credits.
