# changed

Quickly fetches latest changes using module's
history, changes file or readme.

## Problem

Often your project depends on multiple modules. If you
want to upgrade to latest version for a given module, how
do you know that has changed since the version you have?
The only solution is often to manually browse to the module's
website and find the History.md or Changes.md or similar file.

I am trying to automate this common action:

  changed -m foo

  // prints
  0.5.0
    - fixed tabs
    - started using bar

## Install and run

  npm install -g changed
  changed --help

## Related

Once you know that you would like to update to given module,
you can use my other tool [next-update](https://npmjs.org/package/next-update) to quickly check if updating breaks any unit tests.

## Small print

Author: Gleb Bahmutov &copy; 2013

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with the module, email me directly.