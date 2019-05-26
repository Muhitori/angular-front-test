export class Pagination {
  public totalPages: number = 0;
  private _pages: number[] = [];
  private _totalItems = 100; // by restAPI https://jsonplaceholder.typicode.com

  constructor(
    private _currentPage: number = 1,
    private _pageSize: number = 10
  ) {
    this.calculatePages();
    this.buildPages();
  }

  get totalItems(): any {
    return this._totalItems;
  }

  set totalItems(totalItems: any) {
    if (!totalItems) {
      this._totalItems = 0;
    } else {
      this._totalItems = typeof (totalItems) === 'string' ? parseInt(totalItems, 10) : totalItems;
    }
    this.calculatePages();
    this.buildPages();
  }

  get currentPage(): any {
    return this._currentPage;
  }

  set currentPage(currentPage: any) {
    if (!currentPage) {
      this._currentPage = 1;
    } else if (currentPage > 0 && currentPage <= this.totalPages) {
      this._currentPage = typeof currentPage === 'string' ? parseInt(currentPage, 10) : currentPage;
    } else {
      this._currentPage = this.totalPages;
    }
    this.buildPages();
  }

  get pageSize(): any {
    return this._pageSize;
  }

  set pageSize(pageSize: any) {
    if (!pageSize) {
      this._pageSize = 10;
    } else if (pageSize < this.totalItems) {
      this._pageSize = typeof pageSize === 'string' ? parseInt(pageSize, 10) : pageSize;
    } else {
      this._pageSize = this.totalItems;
    }
    this.calculatePages();
    this.buildPages();
  }

  calculatePages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.last;
    }
  }

  next(): number {
    if (this.hasNext) {
      return this.currentPage += 1;
    }
  }

  previous(): number {
    if (this.hasPrevious) {
      return this.currentPage -= 1;
    }
  }

  get hasNext(): boolean {
    return this.currentPage < this.totalPages;
  }

  get hasPrevious(): boolean {
    return this.currentPage > 1;
  }

  get last(): number {
    return this.totalPages;
  }

  get first(): number {
    return 1;
  }

  get pages(): number[] {
    return this._pages;
  }

  private buildPages(): void {
    if (!this.currentPage || !this.totalPages) {
      this._pages = [1];
      return;
    }
    this._pages = [];
    this.pages.push(this.currentPage);
    let next = this.currentPage;
    let previous = this.currentPage;
    while (this.pages.length < 5 && this.pages.length < this.totalPages) {
      next++;
      previous--;
      if (next < this.totalPages) {
        this.pages.push(next);
      }
      if (previous > 0) {
        this.pages.unshift(previous);
      }
      if (next > this.totalPages && previous < 0) {
        break;
      }
    }
  }

  get params() {
    return ['currentPage', 'pageSize'];
  }

  fillParameters(input: any): void {
    this.params.forEach((key) => {
      if (input[key]) {
        this[key] = input[key];
      }
    });
  }

}
