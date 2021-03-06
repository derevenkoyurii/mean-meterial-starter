export class Todo {
  completed: boolean;
  deleted: boolean;
  dueDate: boolean;
  id: string;
  important: boolean;
  notes: string;
  starred: boolean;
  startDate: string;
  tags: [{ id: number; name: string; label: string; color: string }];
  title: string;

  /**
   * Constructor
   *
   * @param todo
   */
  constructor(todo) {
    this.id = todo.id;
    this.title = todo.title;
    this.notes = todo.notes;
    this.startDate = todo.startDate;
    this.dueDate = todo.dueDate;
    this.completed = todo.completed;
    this.starred = todo.starred;
    this.important = todo.important;
    this.deleted = todo.deleted;
    this.tags = todo.tags || [];
  }

  /**
   * Toggle star
   */
  toggleStar(): void {
    this.starred = !this.starred;
  }

  /**
   * Toggle important
   */
  toggleImportant(): void {
    this.important = !this.important;
  }

  /**
   * Toggle completed
   */
  toggleCompleted(): void {
    this.completed = !this.completed;
  }

  /**
   * Toggle deleted
   */
  toggleDeleted(): void {
    this.deleted = !this.deleted;
  }
}
