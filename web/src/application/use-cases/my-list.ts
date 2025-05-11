import {
  MyListRepository,
  MyListItem,
} from "@/application/repositories/my-list.repository.interface";

export class GetMyListUseCase {
  constructor(private repo: MyListRepository) {}
  execute(): Promise<MyListItem[]> {
    return this.repo.getList();
  }
}

export class AddToMyListUseCase {
  constructor(private repo: MyListRepository) {}
  async execute(item: MyListItem) {
    await this.repo.addItem(item);
  }
}

export class RemoveFromMyListUseCase {
  constructor(private repo: MyListRepository) {}
  async execute(id: number) {
    await this.repo.removeItem(id);
  }
}

export class ClearMyListUseCase {
  constructor(private repo: MyListRepository) {}
  async execute() {
    await this.repo.clear();
  }
}
