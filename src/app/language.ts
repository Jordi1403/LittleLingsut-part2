export enum Language { Hebrew = 'Hebrew', English = 'English'};

export class TranslatedWord {
  constructor(public origin: string, public target: string){
    this.origin = origin;
    this.target = target;
  }
}
