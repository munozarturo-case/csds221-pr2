# Task Manager Application

Framework: Next.js
Materials Library: MUI

- [USE#104] SIMPLE TABLE         (1) ✓
  - start page has an empty table with headers task, description, deadline, priority, is complete, and action as shown on the preview
- [USE#105] UPDATE BUTTON BINDING (5)
  - if the user checks the 'is complete' checkbox the update button disappears from the tuple
- [USE#106] ADDED TUPLE DISPLAY  (10)
  - the new tuple added will display the provided entries from the dialog including the task, description, deadline, and priority as formatted and shown on the preview
- [USE#107] SUCCESSFUL UPDATE    (5)
  - if the user clicks update on the dialog and the dialog is valid and the tuple is updated properly a success toaster will display saying that the task was updated successfully
- [USE#108] SUCCESSFUL DELETE    (5)
  - if the user clicks the delete button on the tuple the tuple will be deleted from the table and a success toaster will display saying that the task was deleted successfully
- [USE#109] DIALOG REUSABILITY   (6) ✓
  - the task dialog must be a component of its own separate from the page component and be triggered and recycled from the update and add button
- [USE#110] SUCCESSFUL ADD       (5)
  - if user clicks add button and all entries are filled out properly the dialog will close and a new tuple is added to the table with all fields formatted like shown on the preview of the instruction sheet and a success toaster will display saying that the task was added successfully
- [USE#111] IS COMPLETE CHECKBOX (5)
  - the new tuple will display a checkbox under the 'is complete' column that is not checked by default
- [USE#112] EMPTY VALIDATION     (5)
  - the title and description textboxes must validate for empty entries and if not empty the textbox will turn red and display a small error message underneath the textbox
- [USE#113] DATE PICKER          (5) ✓
  - the date picker must display a calender when clicked just like on the preview allowing the user to pick any day of the year and display in the format mm/dd/yyyy
- [USE#114] UPDATE/DELETE BUTTON (5)
  - the new tuple will display an update and delete button under the action column
- [USE#115] UPDATE DIALOG        (6)
  - if the user clicks the 'update' button on a tuple, the task dialog appears updating the title from 'add task' to 'edit task' and changing the icon from a plus icon to an edit icon as shown on the preview, populating all the provided fields from the tuple selected and hiding the title textbox (this is because titles should not be editable after they are created because of distinction)
- [USE#116] VALIDATION RETURN    (5)
  - if user clicks add button but the form is not valid i.e. the title or description textboxes are empty, or the title is not unique, or the deadline is not selected, or the priority radio is not selected, the dialog stays open and the textbox that is invalid shows the error accordingly
- [USE#117] RADIO BUTTON         (5) ✓
  - the priority radio button must allow user to mutually exclusively select between low med and high
- [USE#118] CANCEL BUTTON        (5) ✓
  - if user clicks the cancel button the dialog closes and the to do table does not change
- [USE#119] NOTIFICATIONS        (1) ✓
  - all toaster notifications will be on the lower right side of the app to avoid covering the buttons on top
- [USE#120] DISTINCT VALIDATION  (5) ✓
  - the title textbox must also be unique from the existing titles added to the table and if the title is not unique then the textbox will turn red and display a small error message underneath the textbox
- [USE#121] BANNER BAR           (1) ✓
  - page has an upper banner with a title labeled 'FRAMEWORKS' and on the right side of the banner there is an add button with an add icon to the left side of the label as shown on the preview in the instruction sheet
- [USE#122] ADD DIALOG           (10) ✓
  - when user clicks the add button a dialog prompts with a header that contains a title 'add task' a body that contains a title textbox a description textbox a deadline date picker a priority radio button and a footer that contains an 'add' and 'cancel' button with icons in front of each of those buttons
- [USE#124] TOOLS                (5) ✓
  - application uses an SPA framework like React, Vue, Angular and a materials library like MUI, Vuetify, Bootstrap 5
