/**
 * @license
 * Copyright (c) 2017 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */

/**
 * The constant case validation regex.
 *
 * @object constantCaseRegex
 * @since 1.2.0
 * @category regex
 * @description The constant case validation regex
 */
module.exports = /^([A-Z](?![\d])|[\d](?![A-Z]))+(_?([A-Z](?![\d])|[\d](?![A-Z])))*$|^$/;