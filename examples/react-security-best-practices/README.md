
# React security best practices ✨

Welcome to our guide on improving security of you react web application 🚀

  

Looking for the best ways to secure your React app? Then you’ve come to the right place! We’ve created this checklist of React security best practices to help you and your team find and fix security issues in your React applications. We’ll also show you how to automatically test your React code for security-related issues and automatically fix them. Let's dive in and discover what they are and how they can secure your website!

  

## Use Default XSS Protection with Data Binding 🚀

  

### Firstly what is XSS?

  

XSS, or Cross-Site Scripting, is a type of security vulnerability that can occur in any web applications. XSS happens when an application allows untrusted data to be included in web pages that are then viewed by other users. This can lead to malicious code execution in the context of a user's browser, potentially compromising the security and privacy of that user.

  

So basically it happens when we render user generated data directly in DOM without proper sanitization.

  

### How to prevent XSS attacks?

  

Use default data binding with curly braces `` {} `` and React will automatically escape values to protect against XSS attacks. Note that this protection only occurs when rendering textContent and not when rendering HTML attributes.

  

For example:-

  

`` <div>{data}</div> ``

  

  

## Watch Out for Dangerous URLs and URL-Based Script Injection

  

URLs can contain dynamic script content via javascript: protocol URLs. Use validation to assure your links are http: or https: to avoid javascript: URL-based script injection. Achieve URL validation using a native URL parsing function then match the parsed protocol property to an allow list.

  

For example:-

  

```

  

function validateURL(url) {

  

const parsed = new URL(url)

  

return ['https:', 'http:'].includes(parsed.protocol)

  

}

  

<a href={validateURL(url) ? url : '#'}>Click here!</a>

  

```

  

  

The above code will prevent javascript files to be injected.

  

  

Don’t use this:- `` <a href={attackerControlled}>Click here!</a> ``

  

## Sanitize and Render HTML

  

One of the ways to do XSS attacks is by possbily inserting HTML directly into rendered DOM nodes using dangerouslySetInnerHTML. Any content inserted this way must be sanitized beforehand. Use a sanitization library like **dompurify** on any values before placing them into the dangerouslySetInnerHTML prop.

  

  

Use **dompurify** when inserting HTML into the DOM.

  

  

For example:-

  

```

  

import purify from "dompurify";

  

  

<div dangerouslySetInnerHTML={{ __html:purify.sanitize(data) }} />

  

```

  

  

## Avoid Direct DOM Access

Always avoid accessing the DOM to inject content into DOM nodes directly. But if you do have to, use `dangerouslySetInnerHTML` to inject HTML and sanitize it before injecting it using **dompurify**.

  

### What is react `dangerouslySetInnerHTML` ?

  

`dangerouslySetInnerHTML` is a property that enables developers to directly insert html content within an HTML element found in a React app.

  

```javascript

import  purify  from  "dompurify";

<div  dangerouslySetInnerHTML={{__html:purify.sanitize(data) }} />

```

  

## Secure React server-side rendering

Data binding will provide automatic content escaping when using server-side rendering functions like `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.

  

Avoid concatenating strings onto the output of `renderToStaticMarkup()` before sending the strings to the client for hydration.

  

To avoid XSS, don’t concatenate unsanitized data with the output of `renderToStaticMarkup()`

  

## Check for Known Vulnerabilities in Dependencies

  

Some versions of third-party components might contain JavaScript security issues. Always check your dependencies with a software composition analysis (SCA) tool before adding them to a project, and be sure to update when a newer version becomes available. The following ones are recommended to check for vulnerabilities

  

- [Snyk](https://snyk.io/)

- [Github dependabot](https://github.com/dependabot)

- [Sonar Qube](https://www.sonarsource.com/products/sonarqube/)

  

## Avoid JSON Injection Attacks

  

It is common to send JSON data along with server-side rendered React pages. Always escape `<` characters with a benign value to avoid injection attacks.

  

Always escape HTML significant values from JSON with benign equivalent characters.

  

For example:

`` window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace( /</g, '\\u003c')} ``

Here replacing the `<` character with `\u003c` is a security measure to ensure that potentially malicious data included in JSON does not have unintended consequences when rendered in HTML context. It's a part of a broader strategy to protect against JSON injection and XSS attacks by properly escaping and validating data.
  

## Use non-vulnerable versions of React

  

The React library has had a few [high severity vulnerabilities](https://snyk.io/vuln/npm:react/) in the past, so it is a good idea to stay up to date with the latest version.

  

Avoid vulnerable versions of the `react` and `react-dom` by verifying that you are on the latest version using `npm outdated` to see the latest versions.See how to use this command below
Navigate to your code directory first and then run 
`npm outdated`
It will show all the outdated packages in a tabular format.
  

## Use linter configurations

  

Install linter configurations and plugins that will automatically detect security issues in your code and offer remediation advice.

  

Use the [ESLint React security config](https://github.com/snyk-labs/eslint-config-react-security/) to detect security issues in our code base.

  

Configure a pre-commit hook that fails when security-related linter issues are detected using a library like [husky](https://github.com/typicode/husky).

  

  

## Avoid dangerous library code

  

Library code is often used to perform dangerous operations like directly inserting HTML into the DOM. Review library code manually or with linters to detect unsafe usage of React’s security mechanisms.

  

  

Consider the use of libraries with a caution that do use `dangerouslySetInnerHTML`, `innerHTML`, unvalidated URLs or other unsafe patterns. Use security linters on your `node_modules` folder to detect unsafe patterns in your library code.

  

  

## Conclusion 🌟

  

Security is a very important for any web app out there that uses React. By implementing the recommendations you can protect your website from all types of external scripts and attacks.