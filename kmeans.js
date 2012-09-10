function sample(list, m) {
    var n = list.length;
    if (m > n) return void console &&
        console.log('list length must be > sample');
    var sampleList = [];
    for (var i = n - m; i < n; i++) {
        var item = list[~~(Math.random() * i)];
        if (sampleList.indexOf(item) !== -1)
            sampleList.push(list[i]);
        else
            sampleList.push(item);
    }
    return sampleList;
}

function dist1d(a, b) {
    return Math.abs(a - b);
}

function dist(a, b) {
    var d = 0;
    for (var i = 0; i < a.length; i++) {
      d += Math.pow(a[i] - b[i], 2);
    }
    return Math.sqrt(d);
}

function means_clusters(x, means, distance) {
    // For every value, find the closest mean and add that value to the
    // mean's `vals` array.
    for (i = 0; i < x.length; i++) {
        var dists = [];
        for (var j = 0; j < means.length; j++) {
            dists.push(distance(x[i], means[j].val));
        }
        var closest_index = dists.indexOf(Math.min.apply(null, dists));
        means[closest_index].vals.push(x[i]);
    }
}

function clusters_means(clusters) {
    var newvals = [];
    for (i = 0; i < means.length; i++) {
        var centroid = average(means[i].vals);
        newvals.push({
            val: centroid,
            vals: []
        });
    }
}

function kmeans(x, n, distance, average) {

}

if (typeof module !== 'undefined') {
    module.exports = {
        sample: sample,
        dist1d: dist1d,
        dist: dist,
        means_clusters: means_clusters,
        clusters_means: clusters_means,
        kmeans: kmeans
    };
}
