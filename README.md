# Replication steps

* `yarn` to install
* `yarn watch`
* Make a change to trigger an incremental rebuild. Error should display:

```
ERROR in ./src/index.ts
(14,3): error TS2322: Type '{ foo: Name; bar: Name; }' is not assignable to type 'ReturnType'.
  Types of property 'bar' are incompatible.
    Type 'Name' is not assignable to type 'NamePlus'.
      Property 'hair' is missing in type 'Name'.
```

