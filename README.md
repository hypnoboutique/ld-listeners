# Launch Darkly Listener Issue

## Summary

Listeners appear to be removed but when they are added again after removal, they are called multiple times

## Quick start

Copy env file and set values. Listen flag should be a flag in the LD project related to the MOBILE_KEY that you will 
toggle to trigger listener in the RN project 
```shell
# copy env file
cp .env.sample .env
```

```dotenv
# eg.
MOBILE_KEY=mob-******-****-****-****-********
LISTEN_FLAG=myTestFlag
```

Install dependencies and start the React Native application
```shell
yarn pod
yarn ios

# If you are using M1 silicon, run with Rosetta:
# arch -x86_64 yarn pod
# arch -x86_64 yarn ios
```

### Reproduction

#### Set up
1. Click "add listener"
2. Click "remove listener"
3. Click "add listener" again
4. Toggle the value of the LISTEN_FLAG in LD project

#### Expected
Callback should be called once.

#### Actual
Callback is called twice.

### Additional notes

- The contents of `client.flagListeners` appears correct (there is only one listener in the array for the given flag)
- Adding and removing the listener _n_ time results in _n_ callbacks
