import { Item } from "../models/item.model";

export class AddItem {
  static readonly type = "[INVENTORY] Add item";

  constructor(public payload: Item) {}
}

export class RemoveItem {
  static readonly type = "[INVENTORY] Remove item";

  constructor(public payload: Item) {}
}

export class UseItem {
  static readonly type = "[INVENTORY] Use item";

  constructor(public payload: Item) {}
}
