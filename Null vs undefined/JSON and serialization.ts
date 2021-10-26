/**
 * The JSON standard has support for encoding null but not undefined. 
 * When JSON-encoding an object with an attribute that is null, the attribute will be included with its null value, 
 * whereas an attribute with an undefined value will be excluded entirely.
 */
JSON.stringify({ willStay: null, willBeGone: undefined }) // output: { "willStay": null}