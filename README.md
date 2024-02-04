
# try-catch-alt

An alternative library for try-catch blocks, helps reduce the code and make it cleaner and more readable using anonymous functions.

## Why should use this library?

Instead of doing this (for specific exceptions handling):

```typescript
try
{ 
    // code that throws an exception
    // this line won't execute
}
catch (CustomException ex)
{
    // special handling for CustomException 
}
catch (Exception ex)
{
   // all others
}
```

or even this (when you need to continue the execution when exceptions occur):
```typescript
try
{ 
    // code that throws an exception
}
catch (Exception ex)
{
   // handle
}

try
{ 
    // this code will execute unless the previous catch block 
    // throws an exception (re-throw or new exception) 
}
catch (Exception ex)
{
   // handle
}
```

You can just do this:
```typescript

const data = _trySync(() => {
    //do your thing here and return data
})

if (!data.ok){
    console.log("Do you want to continue exectution?");
    return; //if yes
}
```
## Installation

Install my-project with npm

```bash
  npm install @mumen/try-catch-alt
```
    
## API Reference

#### _try (async)


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `tryFunction` | `() => Promise<T>` | function which may cause exception |


#### _tryMany (async)

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `tryFunction` | `() => Promise<T>` | function which may cause exception |
| `numberOfTrials` | `number` | Number of executions before giving the final result |


#### _trySync (sync)


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `tryFunction` | `() => T` | function which may cause exception |


#### _trySyncMany (sync)

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `tryFunction` | `() => T` | function which may cause exception |
| `numberOfTrials` | `number` | Number of executions before giving the final result |




## Usage/Examples

```typescript
// _try: use this method for ASYNC try-catch, won't re-try on failure

import { _try } from "@mumen/try-catch-alt";

async function getDataExample() {
  const data = await _try(async () => {
    const apiResponse = await fetch(
      ".."
    );
    const json = await apiResponse.json();
    return json;
  });


  if (data.ok)
    console.log(data.result);
  else
    console.log(data.error);

  console.log('Execution continues!')
}

getDataExample();
```


```typescript
// _trySync: use this method for SYNC try-catch, won't re-try on failure

import { _trySync } from "@mumen/try-catch-alt";

function doWork() {
  const data = _try(() => {
      // your code goes here

      //return result
  });


  if (data.ok)
    console.log(data.result);
  else
    console.log(data.error);

  console.log('Execution continues!')
}

doWork();
```

```typescript
// _tryMany: use this method for ASYNC try-catch, re-try will occur on failure

import { _tryMany } from "@mumen/try-catch-alt";

async function getDataExample() {
  const data = await _tryMany(async () => {
    const apiResponse = await fetch(
      ".."
    );
    const json = await apiResponse.json();
    return json;
  }, 3);


  if (data.ok)
    console.log(data.result);
  else
    console.log(data.error);

  console.log('Execution continues!')
}

getDataExample();
```

```typescript
// _tryManySync: use this method for SYNC try-catch, re-try will occur on failure

import { _tryManySync } from "@mumen/try-catch-alt";

function doWork() {
  const data = _tryManySync(() => {
    // your code goes here

    //return result
  }, 3);


  if (data.ok)
    console.log(data.result);
  else
    console.log(data.error);

  console.log('Execution continues!')
}

doWork();
```

## Authors

- [@MumenTayyem](https://www.npmjs.com/settings/mu2men/profile)

