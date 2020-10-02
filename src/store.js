export default {
  results: [
    {
      name: "Edward",
      slug: "Edward",
      score: 0.079,
      fileOneName: "001.java",
      fileTwoName: "002.java",
      fileOneMatches: [2, 3, 8, 5],
      fileTwoMatches: [3],
      fileOneLines: [
        "public class ERCJb {",
        "private q1INlWzHq i(lbL4 h8xdE8h9, qxnOLy6W U, pTf5EDo phA, Q WkUxk_gEu) {",
        "for (NdQ = cp0Dmy + A * UTck * IG2; oao_w1Ri * kS_b8MoFn < M * W9SnB5P; O4 = SyARKYrM < Fncov) {"
      ],
      fileTwoLines: [
        "public class fOr54jzw {",
        "private XhX o(phy Li2, RUzR EGE1, HtNtb bxHZ3s8, RFWodpN0O F9H, p cznoGBrW) {",
        "if (CEhFo + g * dOYzBzX) {"
      ]
    },
    {
      name: "Result2",
      slug: "result2",
      score: 0.45,
      firstFile: "002.java",
      secFile: "002-p.java",
      matches: [
        {
          firstIntervalMin: 34,
          firstIntervalMax: 24,
          secIntervalMin: 14,
          secIntervalMax: 45
        },
        {
          firstIntervalMin: 12,
          firstIntervalMax: 16,
          secIntervalMin: 45,
          secIntervalMax: 78
        }
      ]
    },
    {
      name: "Result3",
      slug: "result3",
      score: 0.45,
      firstFile: "001-p.java",
      secFile: "002-p.java",
      matches: [
        {
          firstIntervalMin: 34,
          firstIntervalMax: 24,
          secIntervalMin: 14,
          secIntervalMax: 45
        },
        {
          firstIntervalMin: 12,
          firstIntervalMax: 16,
          secIntervalMin: 45,
          secIntervalMax: 78
        }
      ]
    }
  ]
};
