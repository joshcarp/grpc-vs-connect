/**
 * @fileoverview gRPC-Web generated client stub for buf.connect.demo.eliza.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.buf = {};
proto.buf.connect = {};
proto.buf.connect.demo = {};
proto.buf.connect.demo.eliza = {};
proto.buf.connect.demo.eliza.v1 = require('./eliza_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.buf.connect.demo.eliza.v1.ElizaServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.buf.connect.demo.eliza.v1.ElizaServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.buf.connect.demo.eliza.v1.SayRequest,
 *   !proto.buf.connect.demo.eliza.v1.SayResponse>}
 */
const methodDescriptor_ElizaService_Say = new grpc.web.MethodDescriptor(
  '/buf.connect.demo.eliza.v1.ElizaService/Say',
  grpc.web.MethodType.UNARY,
  proto.buf.connect.demo.eliza.v1.SayRequest,
  proto.buf.connect.demo.eliza.v1.SayResponse,
  /**
   * @param {!proto.buf.connect.demo.eliza.v1.SayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buf.connect.demo.eliza.v1.SayResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.buf.connect.demo.eliza.v1.SayRequest,
 *   !proto.buf.connect.demo.eliza.v1.SayResponse>}
 */
const methodInfo_ElizaService_Say = new grpc.web.AbstractClientBase.MethodInfo(
  proto.buf.connect.demo.eliza.v1.SayResponse,
  /**
   * @param {!proto.buf.connect.demo.eliza.v1.SayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buf.connect.demo.eliza.v1.SayResponse.deserializeBinary
);


/**
 * @param {!proto.buf.connect.demo.eliza.v1.SayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.buf.connect.demo.eliza.v1.SayResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.buf.connect.demo.eliza.v1.SayResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.buf.connect.demo.eliza.v1.ElizaServiceClient.prototype.say =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/buf.connect.demo.eliza.v1.ElizaService/Say',
      request,
      metadata || {},
      methodDescriptor_ElizaService_Say,
      callback);
};


/**
 * @param {!proto.buf.connect.demo.eliza.v1.SayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.buf.connect.demo.eliza.v1.SayResponse>}
 *     A native promise that resolves to the response
 */
proto.buf.connect.demo.eliza.v1.ElizaServicePromiseClient.prototype.say =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/buf.connect.demo.eliza.v1.ElizaService/Say',
      request,
      metadata || {},
      methodDescriptor_ElizaService_Say);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.buf.connect.demo.eliza.v1.IntroduceRequest,
 *   !proto.buf.connect.demo.eliza.v1.IntroduceResponse>}
 */
const methodDescriptor_ElizaService_Introduce = new grpc.web.MethodDescriptor(
  '/buf.connect.demo.eliza.v1.ElizaService/Introduce',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.buf.connect.demo.eliza.v1.IntroduceRequest,
  proto.buf.connect.demo.eliza.v1.IntroduceResponse,
  /**
   * @param {!proto.buf.connect.demo.eliza.v1.IntroduceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buf.connect.demo.eliza.v1.IntroduceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.buf.connect.demo.eliza.v1.IntroduceRequest,
 *   !proto.buf.connect.demo.eliza.v1.IntroduceResponse>}
 */
const methodInfo_ElizaService_Introduce = new grpc.web.AbstractClientBase.MethodInfo(
  proto.buf.connect.demo.eliza.v1.IntroduceResponse,
  /**
   * @param {!proto.buf.connect.demo.eliza.v1.IntroduceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buf.connect.demo.eliza.v1.IntroduceResponse.deserializeBinary
);


/**
 * @param {!proto.buf.connect.demo.eliza.v1.IntroduceRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.buf.connect.demo.eliza.v1.IntroduceResponse>}
 *     The XHR Node Readable Stream
 */
proto.buf.connect.demo.eliza.v1.ElizaServiceClient.prototype.introduce =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/buf.connect.demo.eliza.v1.ElizaService/Introduce',
      request,
      metadata || {},
      methodDescriptor_ElizaService_Introduce);
};


/**
 * @param {!proto.buf.connect.demo.eliza.v1.IntroduceRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.buf.connect.demo.eliza.v1.IntroduceResponse>}
 *     The XHR Node Readable Stream
 */
proto.buf.connect.demo.eliza.v1.ElizaServicePromiseClient.prototype.introduce =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/buf.connect.demo.eliza.v1.ElizaService/Introduce',
      request,
      metadata || {},
      methodDescriptor_ElizaService_Introduce);
};


module.exports = proto.buf.connect.demo.eliza.v1;

