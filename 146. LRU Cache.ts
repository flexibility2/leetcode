class LRUCache {
    max: number = 0;
    cache: Map<number, number>
    constructor(capacity: number) {
        this.max = capacity;
        this.cache = new Map();
    }

    get(key: number): number {
        let value = this.cache.get(key);
        if(value !== undefined){
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
        }else{
            return -1;
        }
    }

    put(key: number, value: number): void {
        let val = this.cache.get(key);
        if(val !== undefined){
            this.cache.delete(key);
            this.cache.set(key, value);
        }else{
            if(this.cache.size >= this.max){
                this.cache.delete(this.cache.keys().next().value);
            }
            this.cache.set(key,value);
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 * 
 * new Map() 的键值对迭代顺序是：**按照插入/最后一次 set 的顺序**
 * 用图示理解 Map 内部顺序变化
假设 capacity = 3，初始为空
操作序列          Map 内部顺序（从旧到新）
put(1,100)       →  1
put(2,200)       →  1 → 2
put(3,300)       →  1 → 2 → 3
get(1)           →  delete 1 再 set 1  →  2 → 3 → 1
put(4,400)       满了，先删最老的（2） →  3 → 1 → 4
get(3)           →  delete 3 再 set 3   →  1 → 4 → 3
你会发现：每次 get 或 put 命中，都会把该 key 挪到「最末尾」，而最前面那个永远是「最久没被访问的」→ 这正是 LRU 要的淘汰策略。
this.cache          // 是一个 Map<number, number>

this.cache.keys()   // 返回一个迭代器（Iterator），里面按插入顺序包含所有 key
                    // 顺序：最老的 key 在最前面，最新的 key 在最后面

.next()             // 从迭代器中取出「下一个」元素（因为刚创建迭代器，第一个 .next() 就是第一个元素）
                    // 返回值是一个对象：{ value: 实际的key, done: false }

.value              // 取出这个对象里的 value 属性，也就是真正的 key 值


// 取出 Map 里「按照插入顺序排在第 0 位」的 key
// 也就是「最久没有被 get/put 过的那个 key」
const oldestKey = this.cache.keys().next().value;
 */