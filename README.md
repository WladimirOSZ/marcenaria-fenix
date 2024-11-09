
# Marcenaria Fênix

This project is a portfolio website showcasing the handcrafted furniture created at my father's woodworking shop. Originally built a few years ago, the site has been refactored to improve its functionality, organization, and appearance across both desktop and mobile devices.

## Demo
Desktop:

[Screencast from 2024-11-09 18-22-30.webm](https://github.com/user-attachments/assets/a84bee3a-b49d-4420-a5db-5b487d2e688a)

Mobile:

[Screencast from 2024-11-09 18-47-14.webm](https://github.com/user-attachments/assets/3cd9a5dc-ca2a-4832-8df5-5555d09a2e39)


## Features

- **Responsive Design**: Works well on both desktop and mobile devices.
- **Image Gallery**: Displays a categorized gallery of furniture images with a modal for larger views.
- **Simple Setup**: No additional dependencies beyond jQuery.

## How to Run Locally

### Option 1: Open in Your Browser

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/WladimirOSZ/marcenaria-fenix
   ```

2. **Open the `index.html` file** directly in your browser:
   - Navigate to the project folder and double-click `index.html`, or right-click it and select **Open with [your preferred browser]**.

*Note: If your browser blocks the image loading due to local file access restrictions, try Option 2.*

### Option 2: Using VSCode Live Server (Alternative)

1. **Open the folder** in [Visual Studio Code (VSCode)](https://code.visualstudio.com/).

2. **Install the "Live Server" extension** in VSCode if needed:
   - Go to the Extensions view (`Ctrl+Shift+X`), search for "Live Server," and install it.

3. **Run with Live Server**:
   - Right-click on `index.html` and select **Open with Live Server**.
   - This method ensures all images load correctly if any issues arise with file permissions.

## Known Issues & Future Improvements

- **Additional Features**: There is no zoom in the images yet
- **Optimization**: There’s room for further refactoring for performance improvements. We only have one big script.js file, this script should be broken into smaller parts
