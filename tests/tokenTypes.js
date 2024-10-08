const TokenType = {
    If: 'If',
    Else: 'Else',
    Let: 'Let',
    Make: 'Make',
    Show: 'Show',
    Loop: 'Loop',
    While: 'While',
    Void: 'Void',
    OpenParen: 'OpenParen',
    CloseParen: 'CloseParen',
    OpenBrace: 'OpenBrace',
    CloseBrace: 'CloseBrace',
    OpenBracket: 'OpenBracket',
    CloseBracket: 'CloseBracket', 
    Equals: 'Equals', // For =
    NotEquals: 'NotEquals', // For !=
    GreaterThan: 'GreaterThan',
    EqualsEqual: 'EqualsEqual', // For ==
    StrictEquals: 'StrictEquals', // For ===
    StrictNotEquals: 'StrictNotEquals', // For !==
    LogicalAnd: 'LOGICAL_AND',
    LogicalOr: 'LOGICAL_OR',
    AddMethod: 'AddMethod',
    Dot: 'Dot',
    RemoveMethod: 'RemoveMethod',
    MethodCall: 'MethodCall',
    Not: 'NOT',
    GreaterThanOrEqual: 'GreaterThanOrEqual',
    LessThan: 'LessThan',
    LessThanOrEqual: 'LessThanOrEqual',
    Identifier: 'Identifier',
    Number: 'Number',
    String: 'String',
    Semicolon: 'Semicolon',
    BinaryOperator: 'BinaryOperator',
    Func: 'Func',
    Return: 'Return',
    Comma: 'Comma',
    Boolean: 'Boolean',
    DeleteVar: 'DeleteVar',
    Connect: 'Connect',
    And: 'And', // For &&
    Or: 'Or', // For ||
    Async: 'Async'
};

export default TokenType;
