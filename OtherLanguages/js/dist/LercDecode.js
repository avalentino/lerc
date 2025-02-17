(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Lerc = {}));
})(this, (function (exports) { 'use strict';

  var Module = (function() {
    var _scriptDir = (typeof document === 'undefined' && typeof location === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : typeof document === 'undefined' ? location.href : (document.currentScript && document.currentScript.src || new URL('LercDecode.js', document.baseURI).href));
    
    return (
  function(Module) {
    Module = Module || {};

  var Module=typeof Module!=="undefined"?Module:{};var readyPromiseResolve,readyPromiseReject;Module["ready"]=new Promise(function(resolve,reject){readyPromiseResolve=resolve;readyPromiseReject=reject;});var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key];}}var ENVIRONMENT_IS_WEB=typeof window==="object";var ENVIRONMENT_IS_WORKER=typeof importScripts==="function";var ENVIRONMENT_IS_NODE=typeof process==="object"&&typeof process.versions==="object"&&typeof process.versions.node==="string";var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary;var nodeFS;var nodePath;if(ENVIRONMENT_IS_NODE){if(ENVIRONMENT_IS_WORKER){scriptDirectory=require("path").dirname(scriptDirectory)+"/";}else {scriptDirectory=__dirname+"/";}read_=function shell_read(filename,binary){if(!nodeFS)nodeFS=require("fs");if(!nodePath)nodePath=require("path");filename=nodePath["normalize"](filename);return nodeFS["readFileSync"](filename,binary?null:"utf8")};readBinary=function readBinary(filename){var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret);}assert(ret.buffer);return ret};readAsync=function readAsync(filename,onload,onerror){if(!nodeFS)nodeFS=require("fs");if(!nodePath)nodePath=require("path");filename=nodePath["normalize"](filename);nodeFS["readFile"](filename,function(err,data){if(err)onerror(err);else onload(data.buffer);});};if(process["argv"].length>1){process["argv"][1].replace(/\\/g,"/");}process["argv"].slice(2);process["on"]("uncaughtException",function(ex){if(!(ex instanceof ExitStatus)){throw ex}});process["on"]("unhandledRejection",abort);Module["inspect"]=function(){return "[Emscripten Module object]"};}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href;}else if(typeof document!=="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src;}if(_scriptDir){scriptDirectory=_scriptDir;}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.lastIndexOf("/")+1);}else {scriptDirectory="";}{read_=function(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=function(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)};}readAsync=function(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror();};xhr.onerror=onerror;xhr.send(null);};}}else;Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key];}}moduleOverrides=null;if(Module["arguments"]);if(Module["thisProgram"]);if(Module["quit"]);var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];Module["noExitRuntime"]||true;if(typeof WebAssembly!=="object"){abort("no native wasm support detected");}var wasmMemory;var ABORT=false;function assert(condition,text){if(!condition){abort("Assertion failed: "+text);}}function alignUp(x,multiple){if(x%multiple>0){x+=multiple-x%multiple;}return x}var buffer,HEAP8,HEAPU8,HEAP32;function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=new Uint16Array(buf);Module["HEAPU32"]=new Uint32Array(buf);Module["HEAPF32"]=new Float32Array(buf);Module["HEAPF64"]=new Float64Array(buf);}Module["INITIAL_MEMORY"]||16777216;var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift());}}callRuntimeCallbacks(__ATPRERUN__);}function initRuntime(){callRuntimeCallbacks(__ATINIT__);}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift());}}callRuntimeCallbacks(__ATPOSTRUN__);}function addOnPreRun(cb){__ATPRERUN__.unshift(cb);}function addOnInit(cb){__ATINIT__.unshift(cb);}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb);}var runDependencies=0;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies);}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies);}if(runDependencies==0){if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback();}}}Module["preloadedImages"]={};Module["preloadedAudios"]={};function abort(what){if(Module["onAbort"]){Module["onAbort"](what);}what+="";err(what);ABORT=true;what="abort("+what+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}function isFileURI(filename){return filename.startsWith("file://")}var wasmBinaryFile;if(Module["locateFile"]){wasmBinaryFile="lerc-wasm.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile);}}else {wasmBinaryFile=new URL("lerc-wasm.wasm",(typeof document === 'undefined' && typeof location === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : typeof document === 'undefined' ? location.href : (document.currentScript && document.currentScript.src || new URL('LercDecode.js', document.baseURI).href))).toString();}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}else {throw "both async and sync fetching of the wasm failed"}}catch(err){abort(err);}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch==="function"&&!isFileURI(wasmBinaryFile)){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw "failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}else {if(readAsync){return new Promise(function(resolve,reject){readAsync(wasmBinaryFile,function(response){resolve(new Uint8Array(response));},reject);})}}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"a":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["f"];updateGlobalBufferAndViews(wasmMemory.buffer);wasmTable=Module["asm"]["k"];addOnInit(Module["asm"]["g"]);removeRunDependency();}addRunDependency();function receiveInstantiationResult(result){receiveInstance(result["instance"]);}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){var result=WebAssembly.instantiate(binary,info);return result}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason);})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming==="function"&&!isDataURI(wasmBinaryFile)&&!isFileURI(wasmBinaryFile)&&typeof fetch==="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiationResult,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiationResult)})})}else {return instantiateArrayBuffer(receiveInstantiationResult)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync().catch(readyPromiseReject);return {}}function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback(Module);continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){wasmTable.get(func)();}else {wasmTable.get(func)(callback.arg);}}else {func(callback.arg===undefined?null:callback.arg);}}}function ___cxa_allocate_exception(size){return _malloc(size+16)+16}function ExceptionInfo(excPtr){this.excPtr=excPtr;this.ptr=excPtr-16;this.set_type=function(type){HEAP32[this.ptr+4>>2]=type;};this.get_type=function(){return HEAP32[this.ptr+4>>2]};this.set_destructor=function(destructor){HEAP32[this.ptr+8>>2]=destructor;};this.get_destructor=function(){return HEAP32[this.ptr+8>>2]};this.set_refcount=function(refcount){HEAP32[this.ptr>>2]=refcount;};this.set_caught=function(caught){caught=caught?1:0;HEAP8[this.ptr+12>>0]=caught;};this.get_caught=function(){return HEAP8[this.ptr+12>>0]!=0};this.set_rethrown=function(rethrown){rethrown=rethrown?1:0;HEAP8[this.ptr+13>>0]=rethrown;};this.get_rethrown=function(){return HEAP8[this.ptr+13>>0]!=0};this.init=function(type,destructor){this.set_type(type);this.set_destructor(destructor);this.set_refcount(0);this.set_caught(false);this.set_rethrown(false);};this.add_ref=function(){var value=HEAP32[this.ptr>>2];HEAP32[this.ptr>>2]=value+1;};this.release_ref=function(){var prev=HEAP32[this.ptr>>2];HEAP32[this.ptr>>2]=prev-1;return prev===1};}function ___cxa_throw(ptr,type,destructor){var info=new ExceptionInfo(ptr);info.init(type,destructor);throw ptr}function _abort(){abort();}function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num);}function emscripten_realloc_buffer(size){try{wasmMemory.grow(size-buffer.byteLength+65535>>>16);updateGlobalBufferAndViews(wasmMemory.buffer);return 1}catch(e){}}function _emscripten_resize_heap(requestedSize){var oldSize=HEAPU8.length;requestedSize=requestedSize>>>0;var maxHeapSize=2147483648;if(requestedSize>maxHeapSize){return false}for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignUp(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=emscripten_realloc_buffer(newSize);if(replacement){return true}}return false}var asmLibraryArg={"e":___cxa_allocate_exception,"d":___cxa_throw,"c":_abort,"a":_emscripten_memcpy_big,"b":_emscripten_resize_heap};createWasm();Module["___wasm_call_ctors"]=function(){return (Module["___wasm_call_ctors"]=Module["asm"]["g"]).apply(null,arguments)};Module["_lerc_getBlobInfo"]=function(){return (Module["_lerc_getBlobInfo"]=Module["asm"]["h"]).apply(null,arguments)};Module["_lerc_getDataRanges"]=function(){return (Module["_lerc_getDataRanges"]=Module["asm"]["i"]).apply(null,arguments)};Module["_lerc_decode"]=function(){return (Module["_lerc_decode"]=Module["asm"]["j"]).apply(null,arguments)};Module["_free"]=function(){return (Module["_free"]=Module["asm"]["l"]).apply(null,arguments)};var _malloc=Module["_malloc"]=function(){return (_malloc=Module["_malloc"]=Module["asm"]["m"]).apply(null,arguments)};var calledRun;function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status;}dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller;};function run(args){if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();readyPromiseResolve(Module);if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun();}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("");},1);doRun();},1);}else {doRun();}}Module["run"]=run;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()();}}run();


    return Module.ready
  }
  );
  })();

  const pixelTypeInfoMap = [
      {
          pixelType: "S8",
          size: 1,
          ctor: Int8Array,
          range: [-128, 128]
      },
      {
          pixelType: "U8",
          size: 1,
          ctor: Uint8Array,
          range: [0, 255]
      },
      {
          pixelType: "S16",
          size: 2,
          ctor: Int16Array,
          range: [-32768, 32767]
      },
      {
          pixelType: "U16",
          size: 2,
          ctor: Uint16Array,
          range: [0, 65536]
      },
      {
          pixelType: "S32",
          size: 4,
          ctor: Int32Array,
          range: [-2147483648, 2147483647]
      },
      {
          pixelType: "U32",
          size: 4,
          ctor: Uint32Array,
          range: [0, 4294967296]
      },
      {
          pixelType: "F32",
          size: 4,
          ctor: Float32Array,
          range: [-3.4027999387901484e38, 3.4027999387901484e38]
      },
      {
          pixelType: "F64",
          size: 8,
          ctor: Float64Array,
          range: [-1.7976931348623157e308, 1.7976931348623157e308]
      }
  ];
  let loadPromise = null;
  let loaded = false;
  function load(options = {}) {
      if (loadPromise) {
          return loadPromise;
      }
      const locateFile = options.locateFile ||
          ((wasmFileName, scriptDir) => `${scriptDir}${wasmFileName}`);
      loadPromise = Module({ locateFile }).then((lercFactory) => lercFactory.ready.then(() => {
          initLercLib(lercFactory);
          loaded = true;
      }));
      return loadPromise;
  }
  function isLoaded() {
      return loaded;
  }
  const lercLib = {
      getBlobInfo: null,
      decode: null
  };
  function normalizeByteLength(n) {
      // extra buffer on top of 8 byte boundary: https://stackoverflow.com/questions/56019003/why-malloc-in-webassembly-requires-4x-the-memory
      return ((n >> 3) << 3) + 16;
  }
  function initLercLib(lercFactory) {
      const { _malloc, _free, _lerc_getBlobInfo, _lerc_getDataRanges, _lerc_decode, asm } = lercFactory;
      // do not use HeapU8 as memory dynamically grows from the initial 16MB
      // test case: landsat_6band_8bit.24
      let heapU8;
      const memory = Object.values(asm).find((val) => val && "buffer" in val && val.buffer === lercFactory.HEAPU8.buffer);
      const mallocMultiple = (byteLengths) => {
          // malloc once to avoid pointer for detached memory when it grows to allocate next chunk
          const lens = byteLengths.map((len) => normalizeByteLength(len));
          const byteLength = lens.reduce((a, b) => a + b);
          const ret = _malloc(byteLength);
          heapU8 = new Uint8Array(memory.buffer);
          let prev = lens[0];
          lens[0] = ret;
          // pointers for each allocated block
          for (let i = 1; i < lens.length; i++) {
              const next = lens[i];
              lens[i] = lens[i - 1] + prev;
              prev = next;
          }
          return lens;
      };
      lercLib.getBlobInfo = (blob) => {
          // copy data to wasm. info: 10 * Uint32, range: 3 * F64
          const infoArr = new Uint8Array(10 * 4);
          const rangeArr = new Uint8Array(3 * 8);
          const [ptr, ptr_info, ptr_range] = mallocMultiple([
              blob.length,
              infoArr.length,
              rangeArr.length
          ]);
          heapU8.set(blob, ptr);
          heapU8.set(infoArr, ptr_info);
          heapU8.set(rangeArr, ptr_range);
          // decode
          let hr = _lerc_getBlobInfo(ptr, blob.length, ptr_info, ptr_range, 10, 3);
          if (hr) {
              _free(ptr);
              throw `lerc-getBlobInfo: error code is ${hr}`;
          }
          heapU8 = new Uint8Array(memory.buffer);
          infoArr.set(heapU8.slice(ptr_info, ptr_info + 10 * 4));
          rangeArr.set(heapU8.slice(ptr_range, ptr_range + 3 * 8));
          const lercInfoArr = new Uint32Array(infoArr.buffer);
          const statsArr = new Float64Array(rangeArr.buffer);
          const [version, dataType, dimCount, width, height, bandCount, validPixelCount, blobSize, maskCount] = lercInfoArr;
          const headerInfo = {
              version,
              dimCount,
              width,
              height,
              validPixelCount,
              bandCount,
              blobSize,
              maskCount,
              dataType,
              minValue: statsArr[0],
              maxValue: statsArr[1],
              maxZerror: statsArr[2],
              statistics: []
          };
          if (dimCount === 1 && bandCount === 1) {
              _free(ptr);
              headerInfo.statistics.push({
                  minValue: statsArr[0],
                  maxValue: statsArr[1]
              });
              return headerInfo;
          }
          // get data ranges for nband / ndim blob
          // to reuse blob ptr we need to handle dynamic memory allocation
          const numStatsBytes = dimCount * bandCount * 8;
          const bandStatsMinArr = new Uint8Array(numStatsBytes);
          const bandStatsMaxArr = new Uint8Array(numStatsBytes);
          let ptr_blob = ptr, ptr_min = 0, ptr_max, blob_freed = false;
          if (heapU8.byteLength < ptr + numStatsBytes * 2) {
              _free(ptr);
              blob_freed = true;
              [ptr_blob, ptr_min, ptr_max] = mallocMultiple([
                  blob.length,
                  numStatsBytes,
                  numStatsBytes
              ]);
              heapU8.set(blob, ptr_blob);
          }
          else {
              [ptr_min, ptr_max] = mallocMultiple([numStatsBytes, numStatsBytes]);
          }
          heapU8.set(bandStatsMinArr, ptr_min);
          heapU8.set(bandStatsMaxArr, ptr_max);
          hr = _lerc_getDataRanges(ptr_blob, blob.length, dimCount, bandCount, ptr_min, ptr_max);
          if (hr) {
              _free(ptr_blob);
              if (!blob_freed) {
                  // we have two pointers in two wasm function calls
                  _free(ptr_min);
              }
              throw `lerc-getDataRanges: error code is ${hr}`;
          }
          heapU8 = new Uint8Array(memory.buffer);
          bandStatsMinArr.set(heapU8.slice(ptr_min, ptr_min + numStatsBytes));
          bandStatsMaxArr.set(heapU8.slice(ptr_max, ptr_max + numStatsBytes));
          const allMinValues = new Float64Array(bandStatsMinArr.buffer);
          const allMaxValues = new Float64Array(bandStatsMaxArr.buffer);
          const statistics = headerInfo.statistics;
          for (let i = 0; i < bandCount; i++) {
              if (dimCount > 1) {
                  const minValues = allMinValues.slice(i * dimCount, (i + 1) * dimCount);
                  const maxValues = allMaxValues.slice(i * dimCount, (i + 1) * dimCount);
                  const minValue = Math.min.apply(null, minValues);
                  const maxValue = Math.max.apply(null, maxValues);
                  statistics.push({
                      minValue,
                      maxValue,
                      dimStats: { minValues, maxValues }
                  });
              }
              else {
                  statistics.push({
                      minValue: allMinValues[i],
                      maxValue: allMaxValues[i]
                  });
              }
          }
          _free(ptr_blob);
          if (!blob_freed) {
              // we have two pointers in two wasm function calls
              _free(ptr_min);
          }
          return headerInfo;
      };
      lercLib.decode = (blob, blobInfo) => {
          const { maskCount, dimCount, bandCount, width, height, dataType } = blobInfo;
          // if the heap is increased dynamically between raw data, mask, and data, the malloc pointer is invalid as it will raise error when accessing mask:
          // Cannot perform %TypedArray%.prototype.slice on a detached ArrayBuffer
          const pixelTypeInfo = pixelTypeInfoMap[dataType];
          const numPixels = width * height;
          const maskData = new Uint8Array(numPixels * bandCount);
          const numDataBytes = numPixels * dimCount * bandCount * pixelTypeInfo.size;
          const data = new Uint8Array(numDataBytes);
          const [ptr, ptr_mask, ptr_data] = mallocMultiple([
              blob.length,
              maskData.length,
              data.length
          ]);
          heapU8.set(blob, ptr);
          heapU8.set(maskData, ptr_mask);
          heapU8.set(data, ptr_data);
          const hr = _lerc_decode(ptr, blob.length, maskCount, ptr_mask, dimCount, width, height, bandCount, dataType, ptr_data);
          if (hr) {
              _free(ptr);
              throw `lerc-decode: error code is ${hr}`;
          }
          heapU8 = new Uint8Array(memory.buffer);
          data.set(heapU8.slice(ptr_data, ptr_data + numDataBytes));
          maskData.set(heapU8.slice(ptr_mask, ptr_mask + numPixels));
          _free(ptr);
          return {
              data,
              maskData
          };
      };
  }
  function swapDimensionOrder(pixels, numPixels, numDims, OutPixelTypeArray, inputIsBIP) {
      if (numDims < 2) {
          return pixels;
      }
      const swap = new OutPixelTypeArray(numPixels * numDims);
      if (inputIsBIP) {
          for (let i = 0, j = 0; i < numPixels; i++) {
              for (let iDim = 0, temp = i; iDim < numDims; iDim++, temp += numPixels) {
                  swap[temp] = pixels[j++];
              }
          }
      }
      else {
          for (let i = 0, j = 0; i < numPixels; i++) {
              for (let iDim = 0, temp = i; iDim < numDims; iDim++, temp += numPixels) {
                  swap[j++] = pixels[temp];
              }
          }
      }
      return swap;
  }
  /**
   * Decoding a LERC1/LERC2 byte stream and return an object containing the pixel data.
   *
   * @alias module:Lerc
   * @param {ArrayBuffer} input The LERC input byte stream
   * @param {object} [options] The decoding options below are optional.
   * @param {number} [options.inputOffset] The number of bytes to skip in the input byte stream. A valid Lerc file is expected at that position.
   * @param {string} [options.pixelType] (LERC1 only) Default value is F32. Valid pixel types for input are U8/S8/S16/U16/S32/U32/F32.
   * @param {number} [options.noDataValue] (LERC1 only). It is recommended to use the returned mask instead of setting this value.
   * @param {boolean} [options.returnPixelInterleavedDims] (nDim LERC2 only) If true, returned dimensions are pixel-interleaved, a.k.a [p1_dim0, p1_dim1, p1_dimn, p2_dim0...], default is [p1_dim0, p2_dim0, ..., p1_dim1, p2_dim1...]
   * @returns {{width, height, pixels, pixelType, mask, statistics}}
   * @property {number} width Width of decoded image.
   * @property {number} height Height of decoded image.
   * @property {array} pixels [band1, band2, …] Each band is a typed array of width*height.
   * @property {string} pixelType The type of pixels represented in the output: U8/S8/S16/U16/S32/U32/F32.
   * @property {mask} mask Typed array with a size of width*height, or null if all pixels are valid.
   * @property {array} statistics [statistics_band1, statistics_band2, …] Each element is a statistics object representing min and max values
   **/
  function decode(input, options = {}) {
      var _a;
      // get blob info
      const inputOffset = (_a = options.inputOffset) !== null && _a !== void 0 ? _a : 0;
      const blob = input instanceof Uint8Array
          ? input.subarray(inputOffset)
          : new Uint8Array(input, inputOffset);
      const blobInfo = lercLib.getBlobInfo(blob);
      // decode
      const { data, maskData } = lercLib.decode(blob, blobInfo);
      const { width, height, bandCount, dimCount, dataType, maskCount, statistics } = blobInfo;
      // get pixels, per-band masks, and statistics
      const pixelTypeInfo = pixelTypeInfoMap[dataType];
      const data1 = new pixelTypeInfo.ctor(data.buffer);
      const pixels = [];
      const masks = [];
      const numPixels = width * height;
      const numElementsPerBand = numPixels * dimCount;
      for (let i = 0; i < bandCount; i++) {
          const band = data1.subarray(i * numElementsPerBand, (i + 1) * numElementsPerBand);
          if (options.returnPixelInterleavedDims) {
              pixels.push(band);
          }
          else {
              const bsq = swapDimensionOrder(band, numPixels, dimCount, pixelTypeInfo.ctor, true);
              pixels.push(bsq);
          }
          masks.push(maskData.subarray(i * numElementsPerBand, (i + 1) * numElementsPerBand));
      }
      // get unified mask
      const mask = maskCount === 0
          ? null
          : maskCount === 1
              ? masks[0]
              : new Uint8Array(numPixels);
      if (maskCount > 1) {
          mask.set(masks[0]);
          for (let i = 1; i < masks.length; i++) {
              const bandMask = masks[i];
              for (let j = 0; j < numPixels; j++) {
                  mask[j] = mask[j] & bandMask[j];
              }
          }
      }
      // apply no data value
      const { noDataValue } = options;
      const applyNoDataValue = noDataValue != null &&
          pixelTypeInfo.range[0] <= noDataValue &&
          pixelTypeInfo.range[1] >= noDataValue;
      if (maskCount > 0 && applyNoDataValue) {
          for (let i = 0; i < bandCount; i++) {
              const band = pixels[i];
              const bandMask = masks[i] || mask;
              for (let j = 0; j < numPixels; j++) {
                  if (bandMask[j] === 0) {
                      band[j] = noDataValue;
                  }
              }
          }
      }
      // only keep band masks when there's per-band unique mask
      const bandMasks = maskCount === bandCount && bandCount > 1 ? masks : null;
      // lerc2.0 was never released
      const pixelType = options.pixelType && blobInfo.version === 0
          ? options.pixelType
          : pixelTypeInfo.pixelType;
      return {
          width,
          height,
          bandCount,
          pixelType,
          dimCount,
          statistics,
          pixels,
          mask,
          bandMasks
      };
  }
  /**
   * Get the header information of a LERC1/LERC2 byte stream.
   *
   * @alias module:Lerc
   * @param {ArrayBuffer} input The LERC input byte stream
   * @param {object} [options] The decoding options below are optional.
   * @param {number} [options.inputOffset] The number of bytes to skip in the input byte stream. A valid Lerc file is expected at that position.
   * @returns {{version, width, height, bandCount, dimCount, validPixelCount, blobSize, dataType, mask, minValue, maxValue, maxZerror, statistics}}
   * @property {number} version Compression algorithm version.
   * @property {number} width Width of decoded image.
   * @property {number} height Height of decoded image.
   * @property {number} bandCount Number of bands.
   * @property {number} dimCount Number of dimensions.
   * @property {number} validPixelCount Number of valid pixels.
   * @property {number} blobSize Lerc blob size in bytes.
   * @property {number} dataType Data type represented in number.
   * @property {number} minValue Minimum pixel value.
   * @property {number} maxValue Maximum pixel value.
   * @property {number} maxZerror Maximum Z error.
   * @property {array} statistics [statistics_band1, statistics_band2, …] Each element is a statistics object representing min and max values
   **/
  function getBlobInfo(input, options = {}) {
      var _a;
      const blob = new Uint8Array(input, (_a = options.inputOffset) !== null && _a !== void 0 ? _a : 0);
      return lercLib.getBlobInfo(blob);
  }
  function getBandCount(input, options = {}) {
      // this was available in the old JS version but not documented. Keep as is for backward compatiblity
      const info = getBlobInfo(input, options);
      return info.bandCount;
  }

  exports.decode = decode;
  exports.getBandCount = getBandCount;
  exports.getBlobInfo = getBlobInfo;
  exports.isLoaded = isLoaded;
  exports.load = load;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=LercDecode.js.map
