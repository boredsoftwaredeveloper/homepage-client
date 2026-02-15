export interface FeedPost {
  id: string;
  author: string;
  avatar: string;
  timestamp: string;
  location: string;
  contentType: 'code' | 'image';
  codeSnippet?: CodeSnippet;
  imageContent?: ImageContent;
  caption: string;
  hashtags: string[];
}

export interface CodeSnippet {
  lines: CodeLine[];
}

export interface CodeLine {
  segments: CodeSegment[];
}

export interface CodeSegment {
  text: string;
  type: 'keyword' | 'function' | 'comment' | 'value' | 'plain';
}

export interface ImageContent {
  emoji: string;
  title: string;
  variant: 'orange';
}
