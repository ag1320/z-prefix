
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {post_id: 1, title: 'Latin-ish nonsense', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a suscipit mi, a auctor purus. Fusce imperdiet eu nisi in tristique. Pellentesque sit amet sapien vehicula, pulvinar tellus in, dapibus augue. Maecenas tincidunt turpis id gravida fringilla. Praesent facilisis dictum lorem quis mollis. Aliquam erat volutpat. Fusce auctor libero et tortor consectetur varius. Etiam quis erat odio. Vestibulum quis risus ac metus suscipit egestas in at arcu. Praesent lacus enim, congue non ullamcorper a, posuere eget arcu. Nulla porttitor, nisl vitae sollicitudin aliquet, magna sapien semper ante, in eleifend lacus lacus sed dolor. Mauris tempor efficitur urna, id molestie augue mattis sed. Curabitur non arcu condimentum arcu rutrum hendrerit quis eget lorem. Sed vestibulum quis tellus eget laoreet. Aliquam auctor sit amet odio rutrum consequat. Nunc condimentum porta quam, laoreet posuere neque aliquet ut. Nullam ultricies tempus ante non convallis. Maecenas quis nunc tempus lectus feugiat scelerisque in in neque.', user_id: 9000},
        {post_id: 2, title: 'more Latin-ish nonsense', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et pretium velit. Cras metus urna, maximus et arcu vitae, porta viverra erat. Duis sit amet condimentum sem, vitae euismod nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer nec sodales odio. Vivamus tincidunt nibh vel lacus pulvinar ultrices. Etiam sed ex tempus, sollicitudin tellus in, interdum mi. Aenean facilisis nisl eget felis maximus, dapibus efficitur neque ultrices. Mauris facilisis ut lectus ac vestibulum. Mauris vitae enim vel arcu auctor molestie at congue lorem. Duis vitae eros dictum, volutpat lectus eget, sodales nulla. Morbi arcu tellus, imperdiet a enim in, finibus mattis diam. Praesent eu condimentum risus, vel dictum diam. Morbi at iaculis ipsum. Phasellus velit elit, blandit non gravida id, malesuada a risus. Ut gravida non orci in ullamcorper. Vestibulum bibendum sit amet dui vitae porta. Vivamus suscipit molestie pretium. Morbi viverra aliquet sem.', user_id: 9001}
      ]);
    });
};
