```js
expect('').to.be.empty;
```

empty.

```js
expect([]).to.be.empty;
```

empty.

```js
expect({}).to.be.empty;
```

<a name="class-f"></a>
# Class F
match.

```js
expect('Hello, world!').to.match(/^hello/i);
```


D:\Nodejs_Project\Nodejs_1706\day05\mocha-demo\t3>mocha --reporters

    dot - dot matrix
    doc - html documentation
    spec - hierarchical spec list
    json - single json object
    progress - progress bar
    list - spec-style listing
    tap - test-anything-protocol
    landing - unicode landing strip
    xunit - xunit reporter
    min - minimal reporter (great with --watch)
    json-stream - newline delimited json events
    markdown - markdown documentation (github flavour)
    nyan - nyan cat!


D:\Nodejs_Project\Nodejs_1706\day05\mocha-demo\t3>mocha --reporter markd
own
# TOC
   - [Class B](#class-b)
   - [Class C](#class-c)
   - [Class D](#class-d)
   - [Class E](#class-e)
   - [Class F](#class-f)
<a name=""></a>

<a name="class-b"></a>
# Class B
true.

```js
expect(1).to.be.ok;
```

false.

```js
expect(0).to.be.not.ok;
```

false.

```js
expect({}).to.be.ok;
```

<a name="class-c"></a>
# Class C
type of string.

```js
expect('test...').to.be.a('string');
```

type of string.

```js
expect({}).to.be.an('object');
```

<a name="class-d"></a>
# Class D
include.

```js
expect([1, 2, 3]).to.include(1);
```

contain.

```js
expect('Hello, world!').to.contain('Hell');
```

include key.

```js
expect({k1: 'v1', k2: 'v2'}).to.include.keys('k1');
```

<a name="class-e"></a>
# Class E
empty.

```js
expect('').to.be.empty;
```

empty.

```js
expect([]).to.be.empty;
```

empty.

```js
expect({}).to.be.empty;
```

<a name="class-f"></a>
# Class F
match.

```js
expect('Hello, world!').to.match(/^hello/i);
```
