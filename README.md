# React useEffect Cleanup Function Issue

This repository demonstrates a common issue with React's `useEffect` hook where the cleanup function isn't being called when the component unmounts.  The example shows a simple counter component; however, the expected console log indicating unmounting does not appear.

The `bug.js` file contains the buggy code, and `bugSolution.js` provides the corrected version.

## Bug
The issue lies in how the component is unmounted; it might be prematurely removed from the DOM, preventing the cleanup function from executing. This is more likely to occur with scenarios involving dynamic rendering or conditional rendering.