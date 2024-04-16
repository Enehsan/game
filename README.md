## Project Overview

This project is a dynamic web page featuring an animated background and interactive elements that respond to user input. The main attraction is a rocket that follows the mouse cursor, and enemies that appear at random positions on the screen.

## Features

- **Animated Background**: The background simulates a starry sky that moves from top to bottom, creating an illusion of the rocket soaring through space.
- **Interactive Rocket**: A rocket image that follows the user's mouse cursor, allowing for fluid control and movement.
- **Random Enemy Generation**: Enemies appear at random locations and move downwards, creating a challenge for the player to avoid.

## Code Explanation

### HTML Structure

The HTML file sets up the structure of the page, including linking to external CSS for styling and JavaScript files for functionality.

### CSS Styling

The CSS file includes styles for the animated background, the rocket, and enemy elements. It uses keyframe animations to create a continuous scrolling effect for the background.

### JavaScript Functionality

The JavaScript files contain the logic for the interactive elements:
- `rocketHandler.js`: Manages the rocket's assets and state.
- `main.js`: Handles the movement of the rocket and enemy elements, as well as the mouse cursor visibility.

### Key Functions

- `changeRocketAssets()`: Changes the rocket's appearance based on game state.
- `createEnemy()`: Generates an enemy element with a random starting position.
- `moveEnemy(enemy)`: Moves the enemy down the screen and removes it upon reaching the bottom.

## How to Use

To interact with the web page, simply move your mouse around. The rocket will follow the cursor, and enemies will appear and move independently.

## Future Improvements

- Implement collision detection between the rocket and enemies.
- Add scoring and levels to enhance gameplay.
- Improve asset loading and management for smoother animations.

Feel free to explore the code and contribute to its development!

