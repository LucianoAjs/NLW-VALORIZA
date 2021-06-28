import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @Exclude()
  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };

/**
 *
 * Entity (User) < - Repositórios - > ORM <-> BD
 * Repositórios -> { é toda a camada que faz a comunicação entre a entidade e o banco de dados ( metodos que vai manipular o banco -> Busca, inserção, etc...)}
 *
 */
// Entidade < - > ORM < - > BD (users)
