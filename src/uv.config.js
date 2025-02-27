/*global CapybarasUnblocker*/
self.__uv$config = {
	prefix: "/service/",
	encodeUrl: CapybarasUnblocker.codec.xor.encode,
	decodeUrl: CapybarasUnblocker.codec.xor.decode,
	handler: "/uv.handler.js",
	client: "/uv.client.js",
	bundle: "/uv.bundle.js",
	config: "/uv.config.js",
	sw: "/uv.sw.js",
};
