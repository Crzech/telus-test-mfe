export interface Item {
  id: string;
  active: boolean;
  value: string;
}
export interface TodoListContextType {
  items: Item[];
  addItems: (item: string) => void;
  toggleItem: (id: string) => void;
  filter: string;
  setFilter: (filter: string) => void;
  clearStorage: () => void
}
export interface Props {
  children: React.ReactNode;
}
