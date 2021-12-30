# Get Unique Index From Array

Get UNIQUE and RANDOM index from the array.

## Installation

```bash
npm install get-unique-random-number-array
```

P.S. I know it's a long package name ;p

## Usage

```javascript
import { uniqueMultiRandomIndexFromArray } from "get-unique-random-number-array;

let arr = ["apple","Samsung","orange","MI","Banana"];

uniqueMultiRandomIndexFromArray(array,how many unique index needed, previous unique index array);

uniqueMultiRandomIndexFromArray(arr,2,[] );  // return [0,2];
uniqueMultiRandomIndexFromArray(arr,2,[0,2] );  // return [1,3];
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
