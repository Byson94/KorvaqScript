const TokenType = {
    If: 'If',
    Else: 'Else',
    Let: 'Let',
    Make: 'Make',
    Show: 'Show',
    Loop: 'Loop',
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
};

export default TokenType;
