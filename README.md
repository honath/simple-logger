# Overview

Simple "logger" class to be used in any project. Lightweight, straightforward! No configuration of IDs or installing other libraries to simplify this - it simply logs to the console, and is color coded!

## Install
First, navigate to your project directory.

To install, type:
`npm i honath-simple-logger`

## Usage

### Declaration

`const logger = new Logger("info");`

### Invocation

```
logger.info({
    action: "Test Logger",
    location: `<functionName> in ${__dirname}`,
    status: 200,
    notes: [
    "Add additional string messages here!",
    "This is a second note."
    ]
});
```

The above will console out as:

```
 Test Logger at <functionName> in <directory path where this method was invoked>
Status Code: 200
Add additional string messages here!
This is a second note.
```

### Methods

- `logger.trace()`
- `logger.debug()`
- `logger.info()`
- `logger.warn()`
- `logger.error()`
- `logger.fatal()`

## Additional Information

### Valid Log Levels and their Colors

- Trace - Cyan Text
- Debug - Blue Text
- Info - Green Text
- Warn - Yellow Text
- Error - Red Text
- Fatal - Red Background
- Off - Technically Black Text, but will not log anything anyway

### Tips and Warnings

- Invalid Log Levels will send an error message to the console as Magenta text
- Log level must be a string. It will not throw an error immediately, but will treat anything other than a string as an invalid log level
- Logger methods destructure the object sent to them, as shown in the example above
- The `action` and `location` parameters are *required*
- The `status` and `notes` parameters are *optional*
- `status` is intended to be used to reflect HTTP requests and responses, though you could technically use it for anything. There is no hard restriction on data type or length
- Additional parameters **will** be ignored

## Support
If you'd like to support the development of this and other projects, please feel free to support me on [Patreon!](https://www.patreon.com/thechosenwaffle) 