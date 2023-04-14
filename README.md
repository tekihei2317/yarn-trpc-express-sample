# yarn-trpc-express-sample

やりたいことは次の3つです。

- `tsc --watch`でtRPCのサーバー側をビルドして、クライアント側では`d.ts`を使う
- yarn v3を使ってみる
- `yarn workspaces focus`で、サーバーに必要なパッケージのみをインストールする

tRPCはコード生成がないところがメリットなのかなと思っていたのですが、サーバー側の実装が増えるとtsserverに負担がかかりそうなので、ビルドしてみようと思いました。

サーバー側に必要なパッケージのみをインストールしたいのは、コンテナイメージなどを作るときの容量を小さくするためです。`yarn workspace focus`を使えばできそうだったので試してみます。`yarn workspace focus`はworkspace-toolsプラグイン（v2~）が必要だったため、yarn v3も使ってみようと思いました。


## 実行方法

```bash
yarn install

# server
cd server
yarn run dev

# client
cd client
ts-node --transpileOnly src/index.ts
```
