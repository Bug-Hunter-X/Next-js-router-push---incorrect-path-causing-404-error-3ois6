# Next.js router.push() Incorrect Path

This repo demonstrates a common error in Next.js applications when using the `router.push()` method with an incorrect path, resulting in a 404 error. 

## Bug
The `about.js` file contains an error where `router.push()` is used with an incorrect path.  This leads to a 404 error when the user navigates to the Contact Page.

## Solution
The `aboutSolution.js` demonstrates the correct usage of `router.push()` using a relative path. This ensures the user is directed to the correct page.