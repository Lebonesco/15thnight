"""alert gender age

Revision ID: a6fbbe49d0bd
Revises: 5d5b3a73cb2e
Create Date: 2016-02-13 19:34:00.218391

"""

# revision identifiers, used by Alembic.
revision = 'a6fbbe49d0bd'
down_revision = '5d5b3a73cb2e'
branch_labels = None
depends_on = None

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('alerts', sa.Column('age', sa.Integer()))
    op.add_column('alerts', sa.Column('gender', sa.Enum('male', 'female', 'unspecified')))
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'role',
               existing_type=sa.Enum('admin', 'advocate', 'provider'),
               type_=sa.VARCHAR(length=8),
               existing_nullable=True)
    op.drop_column('alerts', 'gender')
    op.drop_column('alerts', 'age')
    ### end Alembic commands ###