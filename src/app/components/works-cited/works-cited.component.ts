import { Component } from '@angular/core';

export enum SourceType {
  PRIMARY,
  ACADEMIC,
  BACKGROUND,
  IMAGE,
}

export interface WorksCited {
  sourceType: SourceType;
  author?: string;
  title: string;
  publication?: string;
  date?: string;
  dateAccessed: string;
  link?: string;
}

export const WORKS_CITED: WorksCited[] = [
  {
    sourceType: SourceType.BACKGROUND,
    author: 'Mark, Joshua',
    title: 'Religion in the Ancient World',
    publication: 'Ancient History Encyclopedia',
    date: '23 Mar 2018',
    dateAccessed: '10 Nov 2020',
    link: 'https://www.ancient.eu/religion/'
  },
  {
    sourceType: SourceType.ACADEMIC,
    author: 'Rod-ari, Melody',
    title: 'Hinduism and Buddhism, an introduction',
    publication: 'Smarthistory',
    date: '24 Jan 2018',
    dateAccessed: '10 Nov 2020',
    link: 'https://smarthistory.org/introduction-to-buddhism/'
  },
  {
    sourceType: SourceType.PRIMARY,
    author: 'Cartweight, Mark',
    title: 'The Spread of Islam in Africa',
    publication: 'Ancient History Encyclopedia',
    date: '2019',
    dateAccessed: '10 Nov 2020',
    link: 'https://www.ancient.eu/img/r/p/500x600/10601.jpg.avif?v=1603466144'
  },
  {
    sourceType: SourceType.IMAGE,
    author: 'Cayasa, Virgil',
    title: 'Rock going into water',
    publication: 'Unsplash',
    dateAccessed: '15 Nov 2020',
    link: 'https://unsplash.com/photos/I79JezfrbLk'
  }
];

@Component({
  selector: 'app-works-cited',
  templateUrl: './works-cited.component.html',
  styleUrls: ['./works-cited.component.scss']
})
export class WorksCitedComponent {
  background: WorksCited[] = [];
  image: WorksCited[] = [];
  academic: WorksCited[] = [];
  primary: WorksCited[] = [];

  constructor() {
    this.background = WORKS_CITED.filter(x => x.sourceType === SourceType.BACKGROUND).sort(this.sortByCitationName);
    this.image = WORKS_CITED.filter(x => x.sourceType === SourceType.IMAGE).sort(this.sortByCitationName);
    this.academic = WORKS_CITED.filter(x => x.sourceType === SourceType.ACADEMIC).sort(this.sortByCitationName);
    this.primary = WORKS_CITED.filter(x => x.sourceType === SourceType.PRIMARY).sort(this.sortByCitationName);
  }

  sortByCitationName = (a: WorksCited, b: WorksCited) => {
    const aName = a.author?.charAt(0) || a.title.charAt(0);
    const bName = b.author?.charAt(0) || b.title.charAt(0);

    return aName.localeCompare(bName);
  }

  buildCitation = (citation: WorksCited): string => `${citation.author ? `${citation.author}. ` : ''}
"${citation.title}."
<i>${citation.publication || 'N.p'}</i>.
${citation.date ? citation.date : 'N.d'}.
${citation.link ? `<a href="${citation.link}">${citation.link}</a>. ` : ''}
Accessed ${citation.dateAccessed}.`
}
