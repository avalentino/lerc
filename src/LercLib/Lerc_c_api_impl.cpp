/*
Copyright 2016 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A local copy of the license and additional notices are located with the
source distribution at:

http://github.com/Esri/lerc/

Contributors:  Thomas Maurer
*/

#include "Defines.h"
#include "include/Lerc_c_api.h"
#include "include/Lerc_types.h"
#include "Lerc.h"

USING_NAMESPACE_LERC

// -------------------------------------------------------------------------- ;

lerc_status lerc_computeCompressedSize(const void* pData, unsigned int dataType, int nDim, int nCols, int nRows, int nBands,
  int nMasks, const unsigned char* pValidBytes, double maxZErr, unsigned int* numBytes)
{
  return lerc_computeCompressedSizeForVersion(pData, -1, dataType, nDim, nCols, nRows, nBands, nMasks, pValidBytes, maxZErr, numBytes);
}

// -------------------------------------------------------------------------- ;

lerc_status lerc_computeCompressedSizeForVersion(const void* pData, int version, unsigned int dataType, int nDim, int nCols, int nRows, int nBands,
  int nMasks, const unsigned char* pValidBytes, double maxZErr, unsigned int* numBytes)
{
  if (!numBytes)
    return (lerc_status)ErrCode::WrongParam;

  *numBytes = 0;

  if (!pData || dataType >= Lerc::DT_Undefined || nDim <= 0 || nCols <= 0 || nRows <= 0 || nBands <= 0 || maxZErr < 0)
    return (lerc_status)ErrCode::WrongParam;

  if (!(nMasks == 0 || nMasks == 1 || nMasks == nBands) || (nMasks > 0 && !pValidBytes))
    return (lerc_status)ErrCode::WrongParam;

  Lerc::DataType dt = (Lerc::DataType)dataType;
  return (lerc_status)Lerc::ComputeCompressedSize(pData, version, dt, nDim, nCols, nRows, nBands, nMasks, pValidBytes, maxZErr, *numBytes);
}

// -------------------------------------------------------------------------- ;

lerc_status lerc_encode(const void* pData, unsigned int dataType, int nDim, int nCols, int nRows, int nBands,
  int nMasks, const unsigned char* pValidBytes, double maxZErr, unsigned char* pOutBuffer, unsigned int outBufferSize,
  unsigned int* nBytesWritten)
{
  return lerc_encodeForVersion(pData, -1, dataType, nDim, nCols, nRows, nBands, nMasks, pValidBytes, maxZErr, pOutBuffer, outBufferSize, nBytesWritten);
}

// -------------------------------------------------------------------------- ;

lerc_status lerc_encodeForVersion(const void* pData, int version, unsigned int dataType, int nDim, int nCols, int nRows, int nBands, 
  int nMasks, const unsigned char* pValidBytes, double maxZErr, unsigned char* pOutBuffer, unsigned int outBufferSize,
  unsigned int* nBytesWritten)
{
  if (!nBytesWritten)
    return (lerc_status)ErrCode::WrongParam;

  *nBytesWritten = 0;

  if (!pData || dataType >= Lerc::DT_Undefined || nDim <= 0 || nCols <= 0 || nRows <= 0 || nBands <= 0 || maxZErr < 0 || !pOutBuffer || !outBufferSize)
    return (lerc_status)ErrCode::WrongParam;

  if (!(nMasks == 0 || nMasks == 1 || nMasks == nBands) || (nMasks > 0 && !pValidBytes))
    return (lerc_status)ErrCode::WrongParam;

  Lerc::DataType dt = (Lerc::DataType)dataType;
  return (lerc_status)Lerc::Encode(pData, version, dt, nDim, nCols, nRows, nBands, nMasks, pValidBytes, maxZErr, pOutBuffer, outBufferSize, *nBytesWritten);
}

// -------------------------------------------------------------------------- ;

lerc_status lerc_getBlobInfo(const unsigned char* pLercBlob, unsigned int blobSize, 
  unsigned int* infoArray, double* dataRangeArray, int infoArraySize, int dataRangeArraySize)
{
  if (!pLercBlob || !blobSize || (!infoArray && !dataRangeArray) || ((infoArraySize <= 0) && (dataRangeArraySize <= 0)))
    return (lerc_status)ErrCode::WrongParam;

  Lerc::LercInfo lercInfo;
  ErrCode errCode = Lerc::GetLercInfo(pLercBlob, blobSize, lercInfo);
  if (errCode != ErrCode::Ok)
    return (lerc_status)errCode;

  if (infoArray)
  {
    int i = 0, ias = infoArraySize;

    if (ias > 0)
      memset(infoArray, 0, ias * sizeof(infoArray[0]));

    if (i < ias)
      infoArray[i++] = (unsigned int)lercInfo.version;
    if (i < ias)
      infoArray[i++] = (unsigned int)lercInfo.dt;
    if (i < ias)
      infoArray[i++] = (unsigned int)lercInfo.nDim;
    if (i < ias)
      infoArray[i++] = (unsigned int)lercInfo.nCols;
    if (i < ias)
      infoArray[i++] = (unsigned int)lercInfo.nRows;
    if (i < ias)
      infoArray[i++] = (unsigned int)lercInfo.nBands;
    if (i < ias)
      infoArray[i++] = (unsigned int)lercInfo.numValidPixel;
    if (i < ias)
      infoArray[i++] = (unsigned int)lercInfo.blobSize;
    if (i < ias)
      infoArray[i++] = (unsigned int)lercInfo.nMasks;
  }

  if (dataRangeArray)
  {
    int i = 0, dras = dataRangeArraySize;

    if (dras > 0)
      memset(dataRangeArray, 0, dras * sizeof(dataRangeArray[0]));

    if (i < dras)
      dataRangeArray[i++] = lercInfo.zMin;
    if (i < dras)
      dataRangeArray[i++] = lercInfo.zMax;
    if (i < dras)
      dataRangeArray[i++] = lercInfo.maxZError;
  }

  return (lerc_status)ErrCode::Ok;
}

// -------------------------------------------------------------------------- ;

lerc_status lerc_getDataRanges(const unsigned char* pLercBlob, unsigned int blobSize,
  int nDim, int nBands, double* pMins, double* pMaxs)
{
  if (!pLercBlob || !blobSize || !pMins || !pMaxs || nDim <= 0 || nBands <= 0)
    return (lerc_status)ErrCode::WrongParam;

  Lerc::LercInfo lercInfo;
  ErrCode errCode = Lerc::GetLercInfo(pLercBlob, blobSize, lercInfo, pMins, pMaxs, (size_t)nDim * (size_t)nBands);
  if (errCode != ErrCode::Ok)
    return (lerc_status)errCode;

  return (lerc_status)ErrCode::Ok;
}

// -------------------------------------------------------------------------- ;

lerc_status lerc_decode(const unsigned char* pLercBlob, unsigned int blobSize, int nMasks,
  unsigned char* pValidBytes, int nDim, int nCols, int nRows, int nBands, unsigned int dataType, void* pData)
{
  if (!pLercBlob || !blobSize || !pData || dataType >= Lerc::DT_Undefined || nDim <= 0 || nCols <= 0 || nRows <= 0 || nBands <= 0)
    return (lerc_status)ErrCode::WrongParam;

  if (!(nMasks == 0 || nMasks == 1 || nMasks == nBands) || (nMasks > 0 && !pValidBytes))
    return (lerc_status)ErrCode::WrongParam;

  Lerc::DataType dt = (Lerc::DataType)dataType;

  ErrCode errCode = Lerc::Decode(pLercBlob, blobSize, nMasks, pValidBytes, nDim, nCols, nRows, nBands, dt, pData);
  if (errCode != ErrCode::Ok)
    return (lerc_status)errCode;

  return (lerc_status)ErrCode::Ok;
}

// -------------------------------------------------------------------------- ;

lerc_status lerc_decodeToDouble(const unsigned char* pLercBlob, unsigned int blobSize, int nMasks,
  unsigned char* pValidBytes, int nDim, int nCols, int nRows, int nBands, double* pData)
{
  if (!pLercBlob || !blobSize || !pData || nDim <= 0 || nCols <= 0 || nRows <= 0 || nBands <= 0)
    return (lerc_status)ErrCode::WrongParam;

  if (!(nMasks == 0 || nMasks == 1 || nMasks == nBands) || (nMasks > 0 && !pValidBytes))
    return (lerc_status)ErrCode::WrongParam;

  Lerc::LercInfo lercInfo;
  ErrCode errCode;
  if ((errCode = Lerc::GetLercInfo(pLercBlob, blobSize, lercInfo)) != ErrCode::Ok)
    return (lerc_status)errCode;

  Lerc::DataType dt = lercInfo.dt;
  if (dt > Lerc::DT_Double)
    return (lerc_status)ErrCode::Failed;

  if (dt == Lerc::DT_Double)
  {
    if ((errCode = Lerc::Decode(pLercBlob, blobSize, nMasks, pValidBytes, nDim, nCols, nRows, nBands, dt, pData)) != ErrCode::Ok)
      return (lerc_status)errCode;
  }
  else
  {
    // use the buffer passed for in place decode and convert
    int sizeofDt[] = { 1, 1, 2, 2, 4, 4, 4, 8 };
    size_t nDataValues = nDim * nCols * nRows * nBands;
    void* ptrDec = (Byte*)pData + nDataValues * (sizeof(double) - sizeofDt[dt]);

    if ((errCode = Lerc::Decode(pLercBlob, blobSize, nMasks, pValidBytes, nDim, nCols, nRows, nBands, dt, ptrDec)) != ErrCode::Ok)
      return (lerc_status)errCode;

    if ((errCode = Lerc::ConvertToDouble(ptrDec, dt, nDataValues, pData)) != ErrCode::Ok)
      return (lerc_status)errCode;
  }

  return (lerc_status)ErrCode::Ok;
}

// -------------------------------------------------------------------------- ;

