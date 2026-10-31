import { DialogueItem, DialogueLine } from '../types';

const A = (hanzi: string, pinyin: string, meaning: string): DialogueLine => ({ speaker: 'A', hanzi, pinyin, meaning });
const B = (hanzi: string, pinyin: string, meaning: string): DialogueLine => ({ speaker: 'B', hanzi, pinyin, meaning });

export const DIALOGUES_DATA: Record<number, DialogueItem[]> = {
  // [제7과: 你去哪儿]
  7: [
    {
      id: 'd7-main-1', lessonId: 7, type: 'main', title: '본문 1',
      preview: '你去哪儿？ 我去图书馆。',
      lines: [
        A('你去哪儿？', 'Nǐ qù nǎr?', '너 어디 가니?'),
        B('我去图书馆。', 'Wǒ qù túshūguǎn.', '나 도서관에 가.'),
        A('怎么去？', 'Zěnme qù?', '어떻게 가?'),
        B('坐公交车去。', 'Zuò gōngjiāochē qù.', '버스 타고 가.'),
      ],
    },
    {
      id: 'd7-app-1', lessonId: 7, type: 'applied', title: '응용 1',
      preview: '你去哪儿？ 我去公园。',
      lines: [A('你去哪儿？', 'Nǐ qù nǎr?', '너 어디 가니?'), B('我去公园。', 'Wǒ qù gōngyuán.', '나 공원에 가.')],
    },
    {
      id: 'd7-app-2', lessonId: 7, type: 'applied', title: '응용 2',
      preview: '你去哪儿？ 我去学校。',
      lines: [A('你去哪儿？', 'Nǐ qù nǎr?', '너 어디 가니?'), B('我去学校。', 'Wǒ qù xuéxiào.', '나 학교에 가.')],
    },
    {
      id: 'd7-app-3', lessonId: 7, type: 'applied', title: '응용 3',
      preview: '你去哪儿？ 我去洗手间。',
      lines: [A('你去哪儿？', 'Nǐ qù nǎr?', '너 어디 가니?'), B('我去洗手间。', 'Wǒ qù xǐshǒujiān.', '나 화장실에 가.')],
    },
    {
      id: 'd7-app-4', lessonId: 7, type: 'applied', title: '응용 4',
      preview: '你怎么去学校？ 我骑自行车去。',
      lines: [
        A('你怎么去学校？', 'Nǐ zěnme qù xuéxiào?', '너는 학교에 어떻게 가니?'),
        B('我骑自行车去。', 'Wǒ qí zìxíngchē qù.', '나는 자전거를 타고 가.'),
      ],
    },
    {
      id: 'd7-app-5', lessonId: 7, type: 'applied', title: '응용 5',
      preview: '你怎么去公园？ 我坐地铁去。',
      lines: [
        A('你怎么去公园？', 'Nǐ zěnme qù gōngyuán?', '너는 공원에 어떻게 가니?'),
        B('我坐地铁去。', 'Wǒ zuò dìtiě qù.', '나는 지하철을 타고 가.'),
      ],
    },
    {
      id: 'd7-main-2', lessonId: 7, type: 'main', title: '본문 2',
      preview: '请问，地铁站怎么走？ 往前走就是。',
      lines: [
        A('请问，地铁站怎么走？', 'Qǐngwèn, dìtiězhàn zěnme zǒu?', '말씀 좀 묻겠습니다. 지하철역은 어떻게 가나요?'),
        B('往前走就是。', 'Wǎng qián zǒu jiù shì.', '앞쪽으로 가면 바로예요.'),
        A('远不远？', 'Yuǎn bu yuǎn?', '멀어요?'),
        B('不太远。', 'Bú tài yuǎn.', '그다지 멀지 않아요.'),
      ],
    },
    {
      id: 'd7-app-6', lessonId: 7, type: 'applied', title: '응용 6',
      preview: '请问，地铁站怎么走？ 往左拐。',
      lines: [
        A('请问，地铁站怎么走？', 'Qǐngwèn, dìtiězhàn zěnme zǒu?', '말씀 좀 묻겠습니다. 지하철역은 어떻게 가나요?'),
        B('往左拐。', 'Wǎng zuǒ guǎi.', '왼쪽으로 도세요.'),
      ],
    },
    {
      id: 'd7-app-7', lessonId: 7, type: 'applied', title: '응용 7',
      preview: '请问，地铁站怎么走？ 往右拐。',
      lines: [
        A('请问，地铁站怎么走？', 'Qǐngwèn, dìtiězhàn zěnme zǒu?', '말씀 좀 묻겠습니다. 지하철역은 어떻게 가나요?'),
        B('往右拐。', 'Wǎng yòu guǎi.', '오른쪽으로 도세요.'),
      ],
    },
    {
      id: 'd7-app-8', lessonId: 7, type: 'applied', title: '응용 8',
      preview: '图书馆怎么走？ 往前走就是。',
      lines: [
        A('图书馆怎么走？', 'Túshūguǎn zěnme zǒu?', '도서관은 어떻게 가나요?'),
        B('往前走就是。', 'Wǎng qián zǒu jiù shì.', '앞쪽으로 가면 바로예요.'),
      ],
    },
  ],
};
