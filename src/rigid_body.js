class RigidBody {
    velocity = vec_from_num(0);

    update(transform) {
        transform.position = transform.position.add(this.velocity);
    }
}