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
  annotation: string;
}

export const WORKS_CITED: WorksCited[] = [
  {
    sourceType: SourceType.BACKGROUND,
    author: 'Mark, Joshua',
    title: 'Religion in the Ancient World',
    publication: 'Ancient History Encyclopedia',
    date: '23 Mar 2018',
    dateAccessed: '10 Nov 2020',
    link: 'https://www.ancient.eu/religion/',
    annotation: 'This source explains the very early bases for religion and the fundamentals behind it. I believe this will be useful for the landing page of the website and background information not specific to the website.',
  },
  {
    sourceType: SourceType.ACADEMIC,
    author: 'Sanders, E.P',
    title: 'St. Paul the Apostle',
    publication: 'Britannica',
    dateAccessed: '12 Nov 2020',
    link: 'https://www.britannica.com/biography/Saint-Paul-the-Apostle',
    annotation: 'Gives background on Paul and how he spread Christianity to the Roman empire.',
  },
  {
    sourceType: SourceType.ACADEMIC,
    author: 'Frend, W.H.C',
    title: 'The Early Church',
    publication: 'Fortress Press',
    date: '1965',
    dateAccessed: '12 Nov 2020',
    link: 'https://books.google.com/books?id=BFdslPRjIkcC',
    annotation: 'Explains how the Romans prosecuted Christians in their early days. Puts early hostility into contrast.',
  },
  {
    sourceType: SourceType.PRIMARY,
    link: 'https://books.google.com/books?id=2WuMyEzani8C',
    title: 'Church and State Through the Centuries: A Collection of Historic Documents',
    dateAccessed: '12 Nov 2020',
    annotation: 'Source material that shows the adoption of Christianity in the Roman Empire'
  },
  {
    sourceType: SourceType.IMAGE,
    link: 'https://www.theguardian.com/commentisfree/2013/jul/02/religion-wars-conflict',
    title: 'A crusader is shot by a Muslim warrior during the Crusades in c1250',
    dateAccessed: '19 Nov 2020',
    publication: 'Hulton Archive/Getty',
    annotation: 'Islam Crusade image for home screen depicting war'
  },
  {
    sourceType: SourceType.IMAGE,
    link: 'https://www.thoughtco.com/along-the-silk-road-167077',
    title: 'Image of the Silk Road',
    dateAccessed: '18 Nov 2020',
    publication: 'Corbis / Getty Image',
    annotation: 'Image of The Silk Road for home screen depicting trade',
  },
  {
    sourceType: SourceType.ACADEMIC,
    link: 'https://www.ancient.eu/Ashoka_the_Great/',
    author: 'Mark, Joshua J.',
    dateAccessed: '12 Nov 2020',
    publication: 'Ancient History Encyclopedia',
    title: 'Ashoka the Great',
    date: '24 Jun. 2020',
    annotation: 'This article gives background on Ashoka and his conquests.',
  },
  {
    sourceType: SourceType.ACADEMIC,
    link: 'https://www.jstor.org/stable/23011678',
    author: 'Liu, Xinru',
    date: 'Mar. 2011',
    title: 'A Silk Road Legacy: The Spread of Buddhism and Islam',
    annotation: 'Shows how Buddhism and Islam spread along the Silk Road and provides context to the traders.',
    publication: 'Journal of World History',
    dateAccessed: '13 Nov. 2020'
  },
  {
    sourceType: SourceType.ACADEMIC,
    link: 'https://books.google.com/books?id=fg-lGID3WpQC',
    title: 'World Heritage Monuments and Related Edifices in India',
    dateAccessed: '20 Nov. 2020',
    date: '2008',
    publication: 'Algora Publishing',
    author: 'Javid, Ali',
    annotation: 'Gives a good background on Sanchi Stupa',
  },
  /*{
    sourceType: SourceType.ACADEMIC,
    author: 'Rod-ari, Melody',
    title: 'Hinduism and Buddhism, an introduction',
    publication: 'Smarthistory',
    date: '24 Jan 2018',
    dateAccessed: '10 Nov 2020',
    link: 'https://smarthistory.org/introduction-to-buddhism/'
  },*/
  /*{
    sourceType: SourceType.PRIMARY,
    author: 'Cartweight, Mark',
    title: 'The Spread of Islam in Africa',
    publication: 'Ancient History Encyclopedia',
    date: '2019',
    dateAccessed: '10 Nov 2020',
    link: 'https://www.ancient.eu/img/r/p/500x600/10601.jpg.avif?v=1603466144'
  },*/
  {
    sourceType: SourceType.PRIMARY,
    title: 'The Holy Bible',
    publication: 'BibleHub',
    dateAccessed: '9 Nov 2020',
    link: 'https://biblehub.com/romans/1-1.htm',
    annotation: 'The bible shows Paul, an Apostle, telling the first-century world about Christianity and Jesus.',
  },
  {
    sourceType: SourceType.IMAGE,
    author: 'Cayasa, Virgil',
    title: 'Rock going into water',
    publication: 'Unsplash',
    dateAccessed: '18 Nov. 2020',
    link: 'https://unsplash.com/photos/I79JezfrbLk',
    annotation: 'A "ripple" representing the spread of something.',
  },
  {
    sourceType: SourceType.ACADEMIC,
    link: 'https://www.jstor.org/stable/23965101',
    author: 'Przyluski, Jean',
    title: 'Origin And Development Of Buddhism',
    publication: 'Oxford University Press',
    date: 'Oct. 1934',
    dateAccessed: '15 Nov 2020',
    annotation: 'Article explaining the early origins of Buddhism and how early message was spread.'
  },
  {
    sourceType: SourceType.ACADEMIC,
    link: 'https://www.jstor.org/stable/29754012',
    author: 'Murthy, H. V. S',
    title: 'East and West',
    publication: 'Istituto Italiano per l\'Africa e l\'Oriente',
    date: 'Sept. 1958',
    dateAccessed: '15 Nov 2020',
    annotation: 'Shows the connection between Buddhism and Aśoka.'
  },
  {
    sourceType: SourceType.PRIMARY,
    link: 'https://en.wikipedia.org/wiki/History_of_Buddhism#/media/File:Asoka%CC%A0_Buddhist_Missions.png',
    publication: 'Wikimedia Commons',
    title: 'Map of the Buddhist missions during the reign of Ashoka',
    dateAccessed: '20 Nov. 2020',
    annotation: 'Shows the spread of Buddhism under Aśoka under a primary source context.'
  },
  {
    sourceType: SourceType.PRIMARY,
    link: 'https://en.wikipedia.org/wiki/Sanchi#/media/File:Yakshini_Sanchi_Stupa_1_Eastern_Gateway.jpg',
    title: 'Yashini, East Gateway, Sanchi',
    publication: 'Wikimedia Commons',
    dateAccessed: '20 Nov. 2020',
    author: 'Nagarjun',
    date: '24 Aug. 2017',
    annotation: 'Shows an stone carving at Sanchi Stupa',
  },
  {
    sourceType: SourceType.PRIMARY,
    link: 'https://quran.com/4/136?translations=131,149,22,95,19',
    title: 'The Qur\'an',
    annotation: 'The Qur\'an',
    dateAccessed: '21 Nov. 2020',
  },
  {
    sourceType: SourceType.ACADEMIC,
    link: 'https://www.latimes.com/archives/la-xpm-2010-oct-24-la-oe-kaplan-20101024-story.html',
    title: 'Eastern Islam and the ‘clash of civilizations’',
    annotation: 'Article on the founding of islam',
    author: 'Kaplan, Robert',
    date: '24 Oct. 2020',
    dateAccessed: '21 Nov. 2020',
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
