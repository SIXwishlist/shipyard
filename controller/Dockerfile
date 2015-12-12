FROM alpine:latest
RUN apk add --update git ca-certificates && \
    rm -rf /var/cache/apk/*
ADD public /public
ADD controller /bin/controller
EXPOSE 8080
ENTRYPOINT ["/bin/controller"]
