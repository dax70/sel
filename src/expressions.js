
const NodeKindValues = {
  constant: 'constant',
  member: 'member',
  equals: 'equals',
  greaterThan: 'greaterThan',
  lessThan: 'lessThan',
  and:'and',
  or:'or'
}

export type NodeKind = $Keys<typeof NodeKindValues>;

export type Node = { kind: NodeKind }

export interface Expression extends Node { kind: NodeKind }

export interface ConstantExpression extends Node {
  kind: NodeKindValues.constant,
  value: string,
  type: string
}
export interface MemberExpression extends Expression {
  kind: NodeKindValues.member,
  member: string
}

export interface UnaryExpression extends Expression { node: Expression }

export interface BinaryExpression extends Expression {
  right:Expression, left: Expression
}
