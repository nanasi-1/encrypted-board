# ローカルで開発する用のDockerイメージ
FROM postgres:16.1

RUN locale-gen ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP

ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo

EXPOSE 5432

USER postgres
