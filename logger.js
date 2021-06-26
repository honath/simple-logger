/**
 * Sends Console messages with color coding based off of the
 * method called. Ignores method calls if the log level being
 * used is "above" the log level being called.
 *
 * Example: Log Level set to "warn" - ignores method calls for "trace", "debug", and "info"
 *
 * CORRECT LOGGER INSTANTIATION:
 * const logger = new Logger("info");
 *
 * RECOMMENDED/EXAMPLE USAGE:
 * logger.info({
 *    action: "Test Logger",
 *    location: `<functionName> in ${__dirname}`,
 *    status: 200,
 *    notes: [
 *      "Add additional string messages here!",
 *      "This is a second note."
 *    ]
 * });
 *
 * LOGGED EXAMPLE FROM ABOVE:
 * (color for "info" will be Green Text/Foreground)
 * "
 *  Test Logger at <functionName> in <directory path>
 * Status Code: 200
 * Add additional string messages here!
 * This is a second note.
 * "
 *
 * REQUIRED PARAMETERS FOR LOGGING METHODS:
 * action
 * location
 *
 * OPTIONAL PARAMETERS FOR LOGGING METHODS:
 * status
 * notes
 */
class Logger {
  /* Defaults to a log level of "info" if no log level is provided */
  constructor(level = "info") {
    this.level = level;
  }

  /**
   * Valid Log Levels for this class
   * "Off" will just not log anything,
   * but will not throw an error the same way
   * an invalid level would
   */
  static validLevels = [
    "trace",
    "debug",
    "info",
    "warn",
    "error",
    "fatal",
    "off",
  ];

  static colors = {
    trace: "\x1b[36m", // Foreground Cyan
    debug: "\x1b[34m", // Foreground Blue
    info: "\x1b[32m", // Foreground Green
    warn: "\x1b[33m", // Foreground Yellow
    error: "\x1b[31m", // Foreground Red
    fatal: "\x1b[41m", // Background Red
    off: "\x1b[30m", // Foreground Black
    invalid: "\x1b[35m", // Foreground Magenta
    reset: "\x1b[0m", // Reset Console Colors
  };

  /**
   * Sends a log level error message indicating that the
   * log level provided on logger instantiation was invalid
   * @outputs
   * "An invalid log level '<PROVIDED LOG LEVEL>' was provided on logger instantiation.
   * The valid logger levels are as follows: trace, debug, info, warn, error, fatal, off"
   */
  _logError() {
    console.log(
      `${Logger.colors.invalid}An invalid log level '${this.level}' was provided on logger instantiation.`,
      `\nThe valid logger levels are as follows: ${Logger.validLevels.join(
        ", "
      )}${Logger.colors.reset}`
    );
  }

  /**
   * Output is colored based on log level
   * Will send an error message for invalid log level
   * Only outputs if log level matches this method's level (trace)
   * @param {Object} message
   * =============================================================================
   * {String} action: Action being taken (Responding to HTTP method)
   * {String} location: Location of logger call (Function name, directory name, etc)
   * {Integer} status: Optional status code for HTTP responses (such as 200 OK)
   * {Array} notes: Optional notes/additional messages for logging
   * @outputs
   * "ACTION at LOCATION
   * Status Code: 200 (optional)
   * Additional Note 1
   * Additional Note 2"
   */
  trace({ action, location, status = null, notes = [] }) {
    if (!Logger.validLevels.includes(this.level)) return this._logError();
    else if (
      Logger.validLevels.indexOf("trace") <
      Logger.validLevels.indexOf(this.level)
    )
      return;

    /* Output logger message */
    console.log(
      `${Logger.colors.trace}`, // set color of output
      `${action} at ${location}`, // output location of method call
      status === null ? `` : `\nStatus Code: ${status}`, // Output status code if provided
      `\n${notes.join("\n")}`, // output any additional user notes/messages
      `${Logger.colors.reset}` // reset console colors
    );
  }

  /**
   * Output is colored based on log level
   * Will send an error message for invalid log level
   * Only outputs if log level matches this method's level (debug)
   * @param {Object} message
   * =============================================================================
   * {String} action: Action being taken (Responding to HTTP method)
   * {String} location: Location of logger call (Function name, directory name, etc)
   * {Integer} status: Optional status code for HTTP responses (such as 200 OK)
   * {Array} notes: Optional notes/additional messages for logging
   * @outputs
   * "ACTION at LOCATION
   * Status Code: 200 (optional)
   * Additional Note 1
   * Additional Note 2"
   */
  debug({ action, location, status = null, notes = [] }) {
    if (!Logger.validLevels.includes(this.level)) return this._logError();
    else if (
      Logger.validLevels.indexOf("debug") <
      Logger.validLevels.indexOf(this.level)
    )
      return;

    /* Output logger message */
    console.log(
      `${Logger.colors.debug}`, // set color of output
      `${action} at ${location}`, // output location of method call
      status === null ? `` : `\nStatus Code: ${status}`, // Output status code if provided
      `\n${notes.join("\n")}`, // output any additional user notes/messages
      `${Logger.colors.reset}` // reset console colors
    );
  }

  /**
   * Output is colored based on log level
   * Will send an error message for invalid log level
   * Only outputs if log level matches this method's level (info)
   * @param {Object} message
   * =============================================================================
   * {String} action: Action being taken (Responding to HTTP method)
   * {String} location: Location of logger call (Function name, directory name, etc)
   * {Integer} status: Optional status code for HTTP responses (such as 200 OK)
   * {Array} notes: Optional notes/additional messages for logging
   * @outputs
   * "ACTION at LOCATION
   * Status Code: 200 (optional)
   * Additional Note 1
   * Additional Note 2"
   */
  info({ action, location, status = null, notes = [] }) {
    if (!Logger.validLevels.includes(this.level)) return this._logError();
    else if (
      Logger.validLevels.indexOf("info") <
      Logger.validLevels.indexOf(this.level)
    )
      return;

    /* Output logger message */
    console.log(
      `${Logger.colors.info}`, // set color of output
      `${action} at ${location}`, // output location of method call
      status === null ? `` : `\nStatus Code: ${status}`, // Output status code if provided
      `\n${notes.join("\n")}`, // output any additional user notes/messages
      `${Logger.colors.reset}` // reset console colors
    );
  }

  /**
   * Output is colored based on log level
   * Will send an error message for invalid log level
   * Only outputs if log level matches this method's level (warn)
   * @param {Object} message
   * =============================================================================
   * {String} action: Action being taken (Responding to HTTP method)
   * {String} location: Location of logger call (Function name, directory name, etc)
   * {Integer} status: Optional status code for HTTP responses (such as 200 OK)
   * {Array} notes: Optional notes/additional messages for logging
   * @outputs
   * "ACTION at LOCATION
   * Status Code: 200 (optional)
   * Additional Note 1
   * Additional Note 2"
   */
  warn({ action, location, status = null, notes = [] }) {
    if (!Logger.validLevels.includes(this.level)) return this._logError();
    else if (
      Logger.validLevels.indexOf("warn") <
      Logger.validLevels.indexOf(this.level)
    )
      return;

    /* Output logger message */
    console.log(
      `${Logger.colors.warn}`, // set color of output
      `${action} at ${location}`, // output location of method call
      status === null ? `` : `\nStatus Code: ${status}`, // Output status code if provided
      `\n${notes.join("\n")}`, // output any additional user notes/messages
      `${Logger.colors.reset}` // reset console colors
    );
  }

  /**
   * Output is colored based on log level
   * Will send an error message for invalid log level
   * Only outputs if log level matches this method's level (error)
   * @param {Object} message
   * =============================================================================
   * {String} action: Action being taken (Responding to HTTP method)
   * {String} location: Location of logger call (Function name, directory name, etc)
   * {Integer} status: Optional status code for HTTP responses (such as 200 OK)
   * {Array} notes: Optional notes/additional messages for logging
   * @outputs
   * "ACTION at LOCATION
   * Status Code: 200 (optional)
   * Additional Note 1
   * Additional Note 2"
   */
  error({ action, location, status = null, notes = [] }) {
    if (!Logger.validLevels.includes(this.level)) return this._logError();
    else if (
      Logger.validLevels.indexOf("error") <
      Logger.validLevels.indexOf(this.level)
    )
      return;

    /* Output logger message */
    console.log(
      `${Logger.colors.error}`, // set color of output
      `${action} at ${location}`, // output location of method call
      status === null ? `` : `\nStatus Code: ${status}`, // Output status code if provided
      `\n${notes.join("\n")}`, // output any additional user notes/messages
      `${Logger.colors.reset}` // reset console colors
    );
  }

  /**
   * Output is colored based on log level
   * Will send an error message for invalid log level
   * Only outputs if log level matches this method's level (fatal)
   * @param {Object} message
   * =============================================================================
   * {String} action: Action being taken (Responding to HTTP method)
   * {String} location: Location of logger call (Function name, directory name, etc)
   * {Integer} status: Optional status code for HTTP responses (such as 200 OK)
   * {Array} notes: Optional notes/additional messages for logging
   * @outputs
   * "ACTION at LOCATION
   * Status Code: 200 (optional)
   * Additional Note 1
   * Additional Note 2"
   */
  fatal({ action, location, status = null, notes = [] }) {
    if (!Logger.validLevels.includes(this.level)) return this._logError();
    else if (
      Logger.validLevels.indexOf("fatal") <
      Logger.validLevels.indexOf(this.level)
    )
      return;

    /* Output logger message */
    console.log(
      `${Logger.colors.fatal}`, // set color of output
      `${action} at ${location}`, // output location of method call
      status === null ? `` : `\nStatus Code: ${status}`, // Output status code if provided
      `\n${notes.join("\n")}`, // output any additional user notes/messages
      `${Logger.colors.reset}` // reset console colors
    );
  }
}

module.exports = Logger;
