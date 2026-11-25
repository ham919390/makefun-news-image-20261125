# THE WORLD DISPATCH — 25 November 2026

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![make.fun · rank](https://make.fun/badge/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![make.fun · reward](https://make.fun/badge/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

A one-page newspaper front page summing up the world's news of **Wednesday, 25 November 2026** — built for the free [news-image-20261125](https://make.fun/bounty/news-image-20261125) bounty on [make.fun](https://make.fun) (referral code `ej1tk366`).

**Lead story:** China investigates Politburo member Chen Jining, the Shanghai party chief — a rare probe at the very top of the ruling party. Also inside: NATO sends early-warning aircraft to Poland, a US jury convicts Huawei of stealing trade secrets, naval mines hit three tankers in the Strait of Hormuz, Shein agrees a $100M FTC settlement, a 5.3-magnitude quake shakes Nepal, and a deadly blast in Hanoi — plus the day's lighter news in the "Also today" strip.

The front page (`entry.png`, 1024×1024) was drawn from scratch in this session with a small Python/Pillow generator (`gen.py` kept in the build folder, not the repo); `main.ts` (Node 22, standard library only) validates the image and copies it to `/output/entry.png`.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png
```
