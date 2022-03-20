# JavaScript宇宙

## Values and Code

> 虽然我们的值和我们的代码交互，但值是存在于完全独立的空间中

- 值不存在于我们的代码中
- 我们的代码中不包括值，我们的代码只是一堆指令，有`if`语句、变量声明、逗号和花括号。

<img src="https://tva1.sinaimg.cn/large/e6c9d24egy1gzj29cdlsuj20s40i2gmu.jpg" alt="image-20220219194800337" style="zoom:50%;" />

可以想象一下我们是一个小人站在地球上，手里拿着要执行的code，上面有一条条指令，值存在于离我们比较远的星球上`boolean `、`number`、`string`、`symbol`、`null`、`undifined`、`object`、`function`

<img src="https://tva1.sinaimg.cn/large/e6c9d24egy1gzj28oyn9pj20uu0u0gnw.jpg" alt="image-20220219194727606" style="zoom:50%;" />

## Values

概括的说，值有两种类型

- 原始类型
  - 原始的价值观就像星星——冰冷而遥远，但当我需要它们时，它们总是在那里。
  - 即使在我这颗小行星的表面，我也能找到它们，并指出它们。
  - 它们可以是数字和字符串等。所有原始值都有一个共同点:它们是JavaScript世界的永久组成部分。我可以指出它们，但我不能创造、破坏或改变它们

```js
console.log(2);
console.log("hello");
console.log(undefined);
```

- 对象和函数
  - 对象和函数也是值，但与原始值不同的是，我可以在代码中操作它们。
  - 如果原始值就像遥远的恒星，那么对象和函数就更像漂浮在我的行星周围的小行星。它们不是我代码的一部分，但它们离我很近，可以操纵

## Types of Values

> JavaScript的值有9种类型

### Primitive Values(原始值)

- Undefined
  -  用于无意中丢失的值
- Null
  - 用于故意丢失值
- Booleans
  - (true和false)，用于逻辑运算。
- Numbers
  -  (-100, 3.14,等等)，用于数学计算。
- BigInts
  -  (罕见且新颖)，用于大数字的数学。
- String
  - (“hello”，“abracadabra”等)，用于文本。
- Symbols
  -  (不常见)，用于举行仪式和隐藏秘密。

### Object and Functions(对象和函数)

- Object({}和其他)，用于对相关数据和代码进行分组。 
- Functions(x => x * 2 和其他)，用于引用代码。

### No Other Types（没有其他类型）

在JavaScript中，除了我们刚刚列举的那些之外，没有其他的基本值类型。

```js
console.log(typeof([])); // "object"
console.log(typeof(new Date())); // "object"
console.log(typeof(/(hello|goodbye)/)); // "object"
```

⚠️ 你可能听说过everything 都是对象。这是一个流行的都市传说，但它不是真的。

虽然像“hi”. touppercase()这样的代码使“hi”看起来像一个对象，但这只是一种错觉。当您这样做时，JavaScript会创建一个临时对象，然后立即丢弃它。如果这个机制还不适合你，那也没关系。这确实相当令人困惑!  现在，您只需要记住原始值(如数字和字符串)不是对象。

## Expressions

> 有很多问题JavaScript无法回答。但是JavaScript很乐意回答一些问题。这些问题有一个特殊的名称，它们被称为表达式。

表达式是JavaScript可以回答的问题。JavaScript用它知道的唯一方式来回答表达式——用值。

总之记住一句话：**Expressions always result in a single value.**

# 总结

- 在JS世界中有值也有code，我们可以认为不同的值悬浮在JS的宇宙中，它们不存在于我们的代码中，但是我们可以在代码中引用它们。
- 值有两种分类，一种是原始类型的值，一种是对象和方法的值，总共有九种不同的类型。每种类型都有特定的用途，但有些很少使用。
- 有些值是孤独的，比如`null`是Null类型的，`undefined`是Undefined类型的，我们将在后面了解到，这两个孤独的值是很多错误的制造者!
- 我们可以向JS宇宙询问表达式，表达式总是表示一个值
- 我们可以用`typeof`来得到值的类型